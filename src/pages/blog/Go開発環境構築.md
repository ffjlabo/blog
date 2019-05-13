---
path: "/setup-environment-for-golang"
date: "2019-05-13"
title: "Go開発環境構築"
---

システムプログラミングに興味が湧いてきたので、前々からやりたかったGo言語に手をだそうと思います。環境構築メモとして残しておきます。
<!-- end -->

## 環境

- macOS Mojave Version 10.14.1
- anyenv
- goenv
- direnv

### goenv

goenvはGo言語のバージョンを管理するためのツールです。
複数のGo言語バージョンを利用することができる。

今回はanyenv経由でgoenvをインストールします。

```
anyenv install goenv
```

次にgoenvのパスを通します。以下のコードを各shellの設定ファイルに追加してください。

```bash
// ファイルに追加
if [ -d $HOME/.anyenv ] ; then
    export PATH="$HOME/.anyenv/bin:$PATH"
    eval "$(anyenv init -)"
    for D in `ls $HOME/.anyenv/envs`
   do
        export PATH="$HOME/.anyenv/envs/$D/shims:$PATH"
   done
fi

// shellを再起動
exec $SHELL -l
```

保存完了後、shellを再起動すると、パスが通ります。
ちなみに、上記設定により、他のanyenvでインストールしたenv系のパスが通るようになっているので書いておくと幸せになることがあります。

## Go言語のインストール

現時点での最新版のGoをインストールします。

```
goenv install -l
```

で、インストールしたいバージョン一覧を取得し、欲しいバージョンを確認します。

```
goenv install <version名>
```

で、欲しいバージョンをインストールします。

## direnv

direnvはディレクトリごとに環境変数を設定することができる便利ツールです。
僕はGOPATHをディレクトリごとに設定するために利用します。

brew経由でdirenvをインストールします。

```
brew install direnv
```

次に、direnvを利用するためにshellの設定ファイルに以下を追加します。

```shell
// ファイルに追加
eval "$(direnv hook zsh)"

// shellを再起動
exec $SHELL -l
```

以上で必要なツールのインストールが完了しました。

## 実際にGo言語を使ってみる

ツールの準備が完了したので、定番のHello World表示行ってみましょう。

まずはじめに、

```
mkdir hello
```

ここで、利用するバージョンのGoをこのディレクトリ配下に反映させます。

```
cd hello
goenv local 1.12.1
```

以上でGoを実行できる環境が整いました。実際にHello Worldを実行してみましょう。
以下のコードをhelloディレクトリ内に保存してください。

``` go
package main

import "fmt"

func main() {
  fmt.Printf("Hello world\n")
}
```

今回はコンパイルせずにコードの動作のみ確認します。

```
go run hello.go
```

Hello Worldが表示されました。

direnvは現状まだ利用していませんが、今後利用する予定です。
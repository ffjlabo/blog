---
path: "/ca-2days-backend-intern"
date: "2020-06-12"
title: "サイバーエージェントの2daysインターン振り返り"
---

どうもふじをです。

遅くなっちゃいましたが、6/6 ~ 6/7の2日間にサイバーエージェントのサーバサイド2daysインターンに参加してきました。振り返りやっていきます。

</br>

# インターン振り返り

## どんなインターン？

[2days サーバーサイド向け 開発型インターンシップ ONLINE](https://www.cyberagent.co.jp/careers/students/event/detail/id=24419)

本インターンでは、用意されたWebアプリケーションをチューニングし、点数を競う開発型インターンです。  
ISUCONをイメージしていただくとわかりやすいと思います。

参加者20名が各自にサーバが割り当てられ、そのサーバで動作しているアプリケーションコードを修正したり、  
nginxなどのミドルウェアやDBなどの設定を変更してパフォーマンスの向上を目指します。

## 当日の様子

今回はオンラインでのインターンだったので、開始前にzoomで全員集合からの競技開始！という流れでした。

競技中は基本的に各々で作業を行い、詰まったりしたらメンターさんにSlackで聞いてみたり、ちょっと話して質問したいなと思ったらzoomで質問したりといった感じです。

アプリケーションコード、nginx、mysqlの設定ファイルをgitで管理する設定をやりました。で、次にnginx、mysqlのログ出力設定をいじって、分析できるようにしました。ここらへんはISUCONの過去問を解いた時のを持ってきた感じです。

次にどういうアプリなんやろなーと思い、色々触ってました。あーなんか記事投稿できるSNSっぽいなあとか、いいね機能ついとるなーとかでおおまかにどんな機能あるか見ていった感じです。

そこからは修正入れてみたのに結局スコア上がらん。。。うーんうーんとうなりつつ作業してました。そんな中、スコアが向上した時はかなり嬉しくて部屋で一人ガッツポーズ取ってたりとして楽しんでました。という感じで一喜一憂しながらモクモク作業の後あっという間に時間が過ぎて、最終日を迎えました。まじで時間が一瞬で過ぎ去っていってびっくりでした。最終的には全体の11位となりました。

## 学び

とにもかくにも**「推測するな、計測せよ！」**

コード中にあきらかにN+1問題が発生してたので、とりあえず直したものの、点数が伸びなかったことがありました。そのことをメンターさんに言ったところ、確かにN+1問題は問題になり得る部分ではあるけど、ボトルネックになっているとは限らない。ログを解析したり、pprofで実行時間がかかっている部分を洗い出すことを意識するといいよ。というアドバイスをいただきました。

多分こうなんじゃない？ではなく、こういう根拠があるからここが問題だ -> 修正 というように、なんで？の根拠となる部分を意識することがとっても大事。個人的にとりあえずなんかやってみようと思って動いちゃうことがよくあるので今後意識していこうと思います。



コード中で**インメモリキャッシュ**  
インターン終了後の解説で紹介されていたキャッシュ方法。アプリケーション中にmapを作成して、そのmapにデータを保持する。かなり目からウロコでした。これは全く思いつきませんでした。

## 感想

とにかくめっちゃ楽しかったとともに自分の実力不足を痛感したインターンでした。同じ興味を持っている人たちと切磋琢磨できたことがめちゃくちゃいい刺激になったと思います。ほんとに参加してよかったなーと。エンジニアリングに関することだけでなく、インターン後に社員の方々と交流する機会もあり、会社の雰囲気を感じることができたのもよかったです。ここでの経験を次に活かして行きたいと思います！とりあえず次のISUCON 10には参加したい！



---

---

---

<br>

ここからはおまけです。  
インターン申し込みからインターン当日までの流れを書いときます。

## インターン採用まで

インターン採用までの流れは以下のとおりです。

```
書類選考 -> 人事面談 -> 採用決定
```

書類選考ではESで今までの経験などを聞かれました。

インターンで人事面接までたどり着いたのは初めてだったので、面談当日はめちゃくちゃ緊張してました。けれども、いざ面談が始まると、担当の方がとても気さくにお話してくださったのかなり緊張がほぐれました。

人事面談では、自身の開発経験についてお話しました。自分のアルバイトでの開発経験や、大学時代に参加していた団体の話、あとは個人開発についてどういったことをしてきたかなどを中心に聞かれました。

あとは就活で企業を選ぶ上で、自分が軸にしていることを聞かれました。

うろ覚えですが、だいたい30、40分くらいで面談は終了しました。

後日、インターンの合格通知が届きました。

</br>

##  採用後 ~ インターン当日まで

本番の約1週間前に再度人事面談があるとのことで、インターンに参加する上での目標について面談させていただきました。

インターン終わったときに、どうなっていたら理想か？をまず考え、その理想を実現するために、やるべきことについて一緒に考えていただけました。

僕の場合は

- パフォーマンスチューニングの知識を吸収する
- あまり慣れていないGoでチャレンジする

ことを面談前に目標としていました。

面談後は、

- 自分なりに最大限用意した上で、その結果を得る 
- 結果が良かったとしても悪かったとしても、それを次に活かす 
- やりきった。自分なりに準備したことが通用したな」と言える状態になる

というような感じでブラッシュアップしていただきました。

この面談が個人的にはとても効果があったなあと思っています。明確に目的を定めたので、モチベの入り方が面談前よりさらに高くなりました。



</br>
# AdobeのExtendScriptをTypescriptでビルドするサンプル

ExtendScriptのコード補完がしたいので、tsファイルをjsxにビルドします。

ソースの雛形は、BracketsのCreative Extensionから生成してます。

Macの場合、以下のフォルダに配置されてAdobeのエクステンションから実行できます。

*/Users/[UserName]/Library/Application Support/Adobe/CEP/extensions/*

### 動作環境

Adobe Photoshop CC(ver.20.0.1)

macOS Mojave(ver 10.14.1)

<br>

### 参考URL

[Photoshopのエクステンションを自作する](https://www.tam-tam.co.jp/tipsnote/tool/post14513.html)

[AdobeCCのExtensionをBracketsで開発しよう ](http://cat.adodtp.com/2016/06/14/?p=114)

[TypeScriptでPhotoshopを操る](https://qiita.com/ConquestArrow/items/8186e22467b5aae86a69)

[TypeScriptでAfterEffects等のAdobeアプリを操作したい](https://qiita.com/sathoshi-metal/items/4f408c504b1b4aeede92)

[VsCodeからPhotoshop連携できるプラグイン](https://marketplace.visualstudio.com/items?itemName=bialikover.vscode-to-photoshop)
<br>

### 使い方

    npm install

    # buildコマンド
    gulp ts
    
### 注意事項

これでコード補完は効くが、フィルター系のファンクションなど一部のものは定義ファイルに入ってないようです。


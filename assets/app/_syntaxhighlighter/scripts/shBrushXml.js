SyntaxHighlighter.brushes.Xml=function(){function a(a){var b=SyntaxHighlighter.Match,c=a[0],d=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(c),e=[];if(null!=a.attributes)for(var f,g=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");null!=(f=g.exec(c));)e.push(new b(f.name,a.index+f.index,"color1")),e.push(new b(f.value,a.index+f.index+f[0].indexOf(f.value),"string"));return null!=d&&e.push(new b(d.name,a.index+d[0].indexOf(d.name),"keyword")),e}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:a}]},SyntaxHighlighter.brushes.Xml.prototype=new SyntaxHighlighter.Highlighter,SyntaxHighlighter.brushes.Xml.aliases=["xml","xhtml","xslt","html"];
/**Create by Fep at 20150228 20:20:03**/

---
layout: post
title: Ubuntu Studio? Por quê?
tags: [ubuntustudio, jack, lowlatency, xfscripts]
image: images/covers/ubuntustudio.png
date: 2020-01-22 00:00:02
---

Se você é criador de conteúdo multimídia, seja áudio, vídeo, imagem, 3D ou jogos, já deve ter baixado o [**Ubuntu Studio**](http://ubuntustudio.org/){:target="_blank"} pra testar ao menos uma vez na vida e depois de iniciar o live, deu uma explorada de leve e se deu conta de que não era _tudo isso_, não viu nada de relevante que te fizesse ficar com ele instalado.

Bom, sou obrigado à concordar, desde sempre, eu acho o **Ubuntu Studio** uma distro meio _bloatware_, cheia de programas que não tem uma real serventia e estão lá só pra cumprir tabela.  

Mas enfim, qual é a real vantagem em usar o **Ubuntu Studio**? A resposta pra essa pergunta é bem simples, mas complexa ao mesmo tempo...

O **Ubuntu Studio** traz por padrão o kernel _lowlatency_, que entre outras vantagens, te permite executar o servidor de áudio [**JACK**](https://jackaudio.org/){:target="_blank"} com áudio em baixa latência, isso é fundamental para trabalhar com programas de edição de áudio e de produção musical, como o [**REAPER**](https://reaper.fm/){:target="_blank"}, por exemplo.  

![jack](https://rauldipeas.github.io/xfscripts/images/jack.png)  

Esse é o maior diferencial do **Ubuntu Studio** em relação as outras _flavours_ do **Ubuntu**, o restante das diferenças é bem superficial, em comparação ao **Xubuntu**, que usa o mesmo ambiente gráfico, o **XFCE**.  

Porém, entretanto e não obstante(_filosofei...rs_), tanto o kernel _lowlatency_ quanto o _JACK_ podem ser instalados em qualquer _flavour_ do **Ubuntu**, sem maiores dificuldades, desde que o _JACK_ seja configurado corretamente, tudo vai funcionar perfeitamente.  

Se você quer saber como instalar o kernel _lowlatency_ e o _JACK_ no **Xubuntu**, não deixe de dar uma conferida no [**XFScripts**]({{ site.baseurl }}/xfscripts).
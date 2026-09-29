(function() {
  "use strict";

  const notes = [
    {
      chinese: `<span class="zh">你</span>昨天<span class="zh">晚上</span>干嘛<span class="zh">去</span>了？<br>
      <span class="pinyin"><span class="zh2">nǐ</span> zuótiān<span class="zh2"> wǎnshang</span> gànmá<span class="zh2"> qù</span> le</span><br>
      <span class="lit"><span class="zh3">you</span> yesterday<span class="zh3"> evening</span> do-what<span class="zh3">-go</span> [past tense marker]</span><br>
      <span class="esp">Qué se fue ud. a hacer anoche?</span> <br><br>
      <span class="gold">去干嘛?</span> means "a qué? / qué necesita hacer allá?", but depending on the context, it can also mean "a qué va a ir (a hacer) ud. allá?" showing confusion or annoyance. For example, someone says they're going to attend a meeting, but you point out that the meeting is intended for managers, and ask why they're going, like questioning. Now, asking "你干嘛去了?" means why the person wasn't at the place you think they should be, like "dónde se metió usted?" with a "qué hace/está haciendo?" feeling. <span class="circle-word">道</span> —你干嘛去了? —我刚才去门口接了个电话 <span class="esp">—Dónde estaba? —Salí a la puerta a contestar una llamada.</span> <span class="circle-word">望</span> —我去趟银行 —(你)去干嘛? (or "去[place]干嘛?)<span class="esp"> —Voy ir al banco —A qué?</span><br>
      🧧 你干嘛呢? is a casual way to say "qué hace/está haciendo?". Simply "干嘛呢?" is an informal greeting (呢 <span class="pinyin">ne</span> is a softener). <span class="circle-word">德</span> —干嘛呢? —没干嘛, 咋了(什么事)? <span class="esp">—Qué más?/Qué está haciendo? —Nada. Qué?/Qué pasó?</span> <span class="circle-word">着</span> —干嘛呢? —我吃饭呢 <span class="esp">—Qué está haciendo? —Comiendo. Qué?/Qué pasó?</span> 🧧 干嘛? is very informal to genuinely ask "what are you doing?", that's why using the softener 呢 is advisable. But with the right tone, it can be a confrontational "what? what's the matter?" when someone's being annoying. When someone calls your name, you can respond with a "干嘛?" among friends or more politely "怎么了? / 什么事?"`,
      handwritten: `<span class="handwritten">你昨天晚上干嘛去了？</span><br>`,
      traditional: `你昨天晚上<span class="trad">幹</span>嘛去了？`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E6%98%A8.png',
      'https://dragonmandarin.com/media/hanzi5-%E5%A4%A9.png',
      'https://dragonmandarin.com/media/hanzi5-%E6%99%9A.png',
      'https://dragonmandarin.com/media/hanzi5-%E4%B8%8A.png',
      'https://dragonmandarin.com/media/hanzi5-%E5%98%9B.png',
      'https://dragonmandarin.com/media/hanzi5-%E5%8E%BB.png',
      ],
      links: [
      { char: '昨天', url: 'https://forvo.com/search/%E6%98%A8%E5%A4%A9%E6%99%9A%E4%B8%8A/' },
      { char: '干嘛', url: 'https://forvo.com/search/%E5%B9%B2%E5%98%9B/' },
      ],
      english: `What were you up to last night?<br>
      What'd you get into last night?<br>
      What were you off doing last night?`,
      russian: `Чем ты вчера вечером занимался?<br>
      А чё ты вчера вечером делал? <br><br>
      <span class="sickle">☭</span> When someone calls your name, you respond "Да? / Чего? / Что случилось? / Что такое?"`,
      russianLinks: [
      { char: 'заниматься', url: 'https://ru.wiktionary.org/wiki/%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'делать', url: 'https://ru.wiktionary.org/wiki/%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C' },
      ]
    },
    {
      chinese: `<span class="zh">给</span>你<span class="zh">发</span>消息<span class="zh">都</span>没<span class="zh">回</span><br>
      <span class="pinyin"><span class="zh2">gěi</span> nǐ<span class="zh2"> fā</span> xiāoxi<span class="zh2"> dōu</span> méi<span class="zh2"> huí</span></span><br>
      <span class="lit"><span class="zh3">to-</span>you<span class="zh3"> send</span> message<span class="zh3"> even-</span>didn't<span class="zh3"> answer</span></span><br>
      <span class="esp">Te escribí y ni siquiera me respondiste</span> <br><br>
      <span class="gold">给你</span> is normally followed by a verb. 你 here is the recipient complement "to/for you", not the direct object being sent. The common pattern is 给你 + verb + obj to mean "te mando el/un + obj" It can be placed at the end (发消息给你), which it's grammatically fine, but the feeling is a bit different because it makes the message the thing you're especifically handling/sending, more like "el mensaje se lo mando a usted". For this latter construction, the use of 把 fits best. <span class="circle-word">畏</span> 那我把照片发给你, 你(再)自己弄就行 <span class="pinyin">nà wǒ bǎ zhàopiàn fā gěi nǐ, nǐ (zài) zìjǐ nòng jiùxǐng</span><span class="esp"> Entonces, la foto se la mando a usted/le mando la foto y ya ud. la arregla</span><span class="unpack">〔WHERE</span>  再 and then; 自己 uno mismo; 弄 do it/take care of it/sort it out/work on it; 就行 a fixed ending meaning "that'll do/that's fine/that's all you need to do"<span class="unpack">〕</span><br>
      🧧 你干嘛呢? is a casual way to say "qué hace/está haciendo?". Simply "干嘛呢?" is an informal greeting (呢 <span class="pinyin">ne</span> is a softener). <span class="circle-word">德</span> —干嘛呢? —没干嘛, 咋了(什么事)? <span class="esp">—Qué más?/Qué está haciendo? —Nada. Qué?/Qué pasó?</span> <span class="circle-word">着</span> —干嘛呢? —我吃饭呢 <span class="esp">—Qué está haciendo? —Comiendo. Qué?/Qué pasó?</span> 🧧 干嘛? is very informal to genuinely ask "what are you doing?", that's why using the softener 呢 is advisable. But with the right tone, it can be a confrontational "what? what's the matter?" when someone's being annoying. When someone calls your name, you can respond with a "干嘛?" among friends or more politely "怎么了? / 什么事?"`,
      handwritten: `<span class="handwritten">给你发消息都没回</span><br>`,
      traditional: `<span class="trad">給</span>你<span class="trad">發</span>消息都<span class="trad">沒</span>回`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E5%8F%91.png',
      'https://dragonmandarin.com/media/hanzi5-%E6%B6%88.png',
      'https://dragonmandarin.com/media/hanzi5-%E5%9B%9E.png'
      ],
      links: [
      { char: '给你', url: 'https://forvo.com/search/%E7%BB%99%E4%BD%A0/' },
      { char: '发消息', url: 'https://forvo.com/search/%E5%8F%91%E6%B6%88%E6%81%AF/' },
      { char: 'sentence with 消息', url: 'https://forvo.com/search/%E9%AB%98%E5%85%B4/' },
      { char: '都', url: 'https://forvo.com/search/%E9%83%BD/' },
      { char: '没', url: 'https://forvo.com/search/%E6%B2%A1/' },
      { char: '回', url: 'https://forvo.com/search/%E5%9B%9E/' },
      ],
      english: `I wrote to you and you didn't reply.<br>
      I wrote you, and you stayed silent.`,
      russian: `Я тебе написала, а ты не ответил.<br>
      Я тебе отправляла сообщения, а ты не отвечал.<br>
      Я тебе писала, а ты молчал. <span class="esp">...te quedaste callado/y no dijiste nada.</span><br><br>
      <span class="sickle">☭</span> Why using imperfective and not perfective in the second and third examples? Написал, отправить, ответил are perfectly correct and actually more accurate for a one-time, completed action (like "te envié un mensaje y no respondiste"). But in casual complaints like this, Russians often use the imperfective to sound softer, less accusatory, or to emphasize "I was waiting and you kept ignoring me" rather than just stating a dry fact. Probably closer to "Le estaba escribiendo a ud. y no respondía" with an ongoing state. But again, the use of perfectives is totally fine.</span>`,
      russianLinks: [
      { char: 'писать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C' },
      { char: 'отвечать', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D1%82%D0%B2%D0%B5%D1%87%D0%B0%D1%82%D1%8C' },
      { char: 'отправлять', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%82%D1%8C' },
      { char: 'молчать', url: 'https://ru.wiktionary.org/wiki/%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">roll off the tongue</span> ☜ <span class="esp">fácil de pronunciar; sonar bien/bonito al pronunciar</span> <span class="usage">(feels poetic; it's not used very often, but you can hear it occasionally. Used usually for comedic or light-hearted moments.)</span><br>
      Something that rolls/trips off the tongue is easy/pleasant/enjoyable to say or pronounce. It can be used to refer to things such as a word, a name, a phrase, or a passage. <span class="skull">☠︎︎</span> <span class="example">The new company needs a name that rolls off the tongue.</span> <span class="skull">☠︎︎</span> <span class="example">The phrase "butter makes it better" rolls off the tongue.</span> (the phrase is easy or fun to say) <span class="skull">☠︎︎</span> <span class="example">I like to speak French because it just rolls of the tongue.</span> (French sounds nice or is easy to speak) <span class="skull">☠︎︎</span> <span class="example">Bart Herbert MacBricker's name doesn't roll off the tongue.</span> (his name is difficult to pronounce) <span class="skull">☠︎︎</span> <span class="example">My parents did a good job naming me. My name rolls off the tongue.</span> <span class="skull">☠︎︎</span> <span class="example">Joe is trying to come up with a slogan for his business, but everything he thinks of just doesn’t roll off the tongue.</span> <span class="skull">☠︎︎</span> <span class="example">Think of a slogan, but it has to be something that rolls off the tongue.</span><br><br>
      <span class="baal">𖤐︎</span> Add "like butter" to make it more creative/dramatic</span> <span class="skull">☠︎︎</span> [on whether a sentence sounds natural]<span class="example"> It rolls off the tongue like butter and sounds like something you'd hear between friends, partners, or family members in daily life.</span>`,
      russian: `приятно выгов<span class="stress">а</span>ривать<br>
      легко/приятно произнос<span class="stress">и</span>ть<br>
      звуч<span class="stress">и</span>т красиво<br><br>
      <span class="star">☆</span> Что-то, что приятно и легко выговаривать <span class="esp">Algo que sea bonito y fácil de decir/pronunciar.</span> <span class="or">или</span> Такое, чтобы звучало красиво <span class="esp">Que suene bonito.</span> <span class="star">☦</span> Подумай над названием, которое легко произносится <span class="esp">Piense en un nombre que sea fácil de pronunciar.</span>`,
      inflection: `<span class="aspect">сов:</span> выговорить`,
      russianLinks: [
      { char: 'выговаривать', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D1%8B%D0%B3%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: 'произносить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%BD%D0%BE%D1%81%D0%B8%D1%82%D1%8C' },
      { char: 'звучать', url: 'https://ru.wiktionary.org/wiki/%D0%B7%D0%B2%D1%83%D1%87%D0%B0%D1%82%D1%8C' },
      { char: 'подумать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%B4%D1%83%D0%BC%D0%B0%D1%82%D1%8C' },
      { char: 'подумать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%B4%D1%83%D0%BC%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">slip of the tongue</span> ☜ <span class="esp">desliz</span> <span class="usage">(fairly common)</span><br>
      When you say "slip of the tongue" it usually means you've said something you weren't supposed to. <span class="skull">☠︎︎</span> <span class="example">And with the slip of the tongue I had spilled my biggest secret.</span>`,
      russian: `оговор<span class="stress">и</span>ться<br>
      огов<span class="stress">о</span>рка (сущ.)<br><br>
      Оговориться: неч<span class="stress">а</span>янно сказать что-то неправильное (исказить слово, употребить не то слово или выражение) <span class="star">☆</span> Ой, оговорился. Я хотел сказать 'вторник', а не 'четверг'. <span class="esp">Uy, se me fue. Quería decir martes, no jueves.</span> <span class="star">☦</span> Оговорка вышла <span class="esp">Fue un error</span><br>
      <span class="sickle">☭</span> Ой, это я не то сказал. Я имел в виду другое. <span class="esp">Uy, no era lo que quería decir. Me refiero/refería a otra cosa.</span><br>
      <span class="sickle">☭</span> Я не так в<span class="stress">ы</span>разился. Я хотел сказать, что это сложно, а не невозможно. <span class="esp">No me expresé bien. Quise decir que es difícil, no imposible.</span><br>
      <span class="sickle">☭</span> Я перепутал имена. Не Сергей, а Андрей. <span class="esp">Confundí los nombres. Era Sergey, no Andrey.</span><br>
      <span class="sickle">☭</span> прокол<span class="stress">о</span>ться (informal) means "embarrarla, cagarla", but often when you accidentally reveal something secret or make a social misstep, or even making a mistake that reveals incompetence. The noun is прок<span class="stress">о</span>л. <span class="star">☆</span> Это был мой прокол <span class="esp">Esa fue mi embarrada</span> <span class="star">☦</span> Он допустил прокол и всё испортил. <span class="esp">Cometió un error y lo arruinó todo.</span> <span class="star">☆</span> Не делай таких прок<span class="stress">о</span>лов на собес<span class="stress">е</span>довании <span class="esp">No cometas esos errores en la entrevista.</span> <span class="star">☦</span> Я чуть не проколся, но в<span class="stress">о</span>время замолч<span class="stress">а</span>л <span class="esp">Casi me voy de lengua pero me callé a tiempo.</span> <span class="star">☆</span> Все думали, что он эксперт, но он прокололся на первом вопросе. <span class="esp">Todos creían que era un experto, pero se enredó en la primera pregunta.</span> <span class="star">☦</span> На этом проколе его и поймали <span class="esp">Por ese error lo pillaron.</span>`,
      inflection: `<span class="aspect">сов:</span> огов<span class="stress">а</span>риваться
      <span class="aspect">несов:</span> выраж<span class="stress">а</span>ться <span class="aspect">сов:</span> в<span class="stress">ы</span>разиться
      <span class="aspect">несов:</span> прок<span class="stress">а</span>ливаться`,
      russianLinks: [
      { char: 'оговориться', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'иметь', url: 'https://ru.wiktionary.org/wiki/%D0%B8%D0%BC%D0%B5%D1%82%D1%8C' },
      { char: 'выражаться', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'прокаливаться', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%D0%BB%D1%8B%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F#%D0%BF%D1%80%D0%BE%D0%BA%D0%B0%CC%81%D0%BB%D1%8B%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'прокол', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BB' },
      ],
    },
    {
      chinese: `<span class="zh">听到</span>这个<span class="zh">好</span>消息,<span class="zh"> 大家</span>都<span class="zh">高兴</span>坏<span class="zh">了</span><br>
      <span class="pinyin"><span class="zh2">tīndào</span> zhège<span class="zh2"> hǎo</span> xiāoxi, <span class="zh2"> dàjiā</span> dōu<span class="zh2"> gāoxìng</span> huài<span class="zh2"> le</span></span><br>
      <span class="lit"><span class="zh3">hear</span> that<span class="zh3"> good</span> news,<span class="zh3"> everybody</span> all<span class="zh3"> happy</span> [suffix:to the utmost]<span class="zh3"> [past tense marker]</span></span><br>
      <span class="esp">Todos nos pusimos todos contentos/super felices cuando escuchamos las (buenas) noticias</span><br><br>
      <span class="gold">高兴</span> means "happy/glad" and many times is interchangeable with 开心 <span class="pinyin">kāixī</span> and 快乐 <span class="pinyin">kuàilè</span>. 开心 is mostly just a more colloquial way to say 高兴. Also 快乐 is more oral than 高兴. 快乐 is sometimes used more to describe a person or an occasion whereas 高兴 mostly just describes a state of mind (so you can say 她是个快乐的人 but not 她是个高兴的人 when you want to say “she’s a happy person”). You can feel 高兴 hanging out with friends, you can feel 快乐 staying at home playing your favorite games and doing nothing. Use 快乐 when you wish someone for a happy holiday, like "生日快乐" <span class="pinyin">shēngrì kuàilè</span> <span class="esp">Feliz cumpleaños!</span> <span class="circle-word">冥</span> 我很快乐 = 我很开心 = 我很高兴 <span class="esp"> Estoy contento/feliz.</span> <span class="circle-word">本</span> 你今天怎么这么开心? <span class="pinyin">nǐ jīntiān zěnme zhème kāixīn</span><span class="esp"> Y hoy por qué tan contento?</span> <span class="circle-word">珍</span> 看到吃的我就高兴/开心了<span class="esp"> Me puse contento/me alegré al ver la comida</span><span class="unpack">〔WHERE</span> 吃的 food; 就 adds that "the moment I saw the food..." flavor, like "ahí mismo", very natural.<span class="unpack">〕</span></span><br>
      🧧 很 is not "very" in "我很高兴", it's just a linker when there's not a degree of the adjective, so you can't drop it when you want to say "I'm happy".<br>
      🧧 幸福 is a very broad, philosophical concept in Chinese culture, representing a supreme stage of happiness and overall positivity. It's used about life. I can feel 幸福 being around the people I love. <span class="circle-word">铸</span> 幸福跟钱有关系 <span class="pinyin">xìngfú gēn qián yǒu guānxi</span> <span class="esp">La felicidad está relacionada con el dinero.</span> <span class="circle-word">瑞</span> 幸福的人生 <span class="pinyin">xìngfú de rénshēng</span> <span class="esp">Una vida feliz.</span> <span class="circle-word">贱</span> <span class="pinyin">xìngfú de hūnyīn</span> <span class="esp">Un matrimonio feliz.</span> <span class="circle-word">咒</span> 幸福的婚姻 <span class="pinyin">xìngfú de tóngnián</span> <span class="esp">Una infancia feliz.</span><br><br>
      <span class="gold">大家都</span> When addressing a group, use 大家; but when the group does sth, use 大家都. <span class="circle-word">天</span> 这件事大家都知道 <span class="pinyin">zhè jiàn shì dàjiā zhīdào</span> <span class="esp">Eso todo el mundo lo sabe.</span> <span class="circle-word">识</span> 大家都来了吗? <span class="pinyin">dàjiā dōu lái le ma</span> <span class="esp">Llegaron todos?</span> <span class="circle-word">医</span> 谢谢大家 <span class="pinyin">xièxie dàjiā</span> <span class="esp">Gracias a todos!</span><br><br>
      <span class="gold">坏</span> as an adverb, it's generally used in spoken Chinese meaning "very/extremely" after a verb, not adjectives. <span class="circle-word">中</span> 忙坏 <span class="pinyin">máng huài</span> <span class="esp">ocupadísimo</span> <span class="circle-word">案</span> 我累坏了 <span class="pinyin">wǒ lèi huài le</span> <span class="esp">Estoy tan cansado!</span>`,
      handwritten: `<span class="handwritten">听到这个好消息 &nbsp大家都高兴坏了</span>`,
      traditional: `<span class="trad">聽</span>到<span class="trad">這個</span>好消息, 大<span class="trad">叫</span>都高<span class="trad">興壞</span>了`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E5%9D%8F.png',
      'https://dragonmandarin.com/media/hanzi5-%E4%BA%8B.png',
      'https://dragonmandarin.com/media/hanzi5-%E8%B0%A2.png'
      ],
      links: [
      { char: '高兴', url: 'https://forvo.com/search/%E9%AB%98%E5%85%B4/' },
      { char: '开心', url: 'https://forvo.com/search/%E5%BC%80%E5%BF%83/' },
      { char: '快乐', url: 'https://forvo.com/search/%E5%BF%AB%E4%BA%86/' },
      { char: '生日快乐', url: 'https://forvo.com/search/%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90/' },
      { char: '怎么这么', url: 'https://forvo.com/search/%E6%80%8E%E4%B9%88%E8%BF%99%E4%B9%88/' },
      { char: '幸福', url: 'https://forvo.com/search/%E5%B9%B8%E7%A6%8F/zh/' },
      { char: '这件事', url: 'https://forvo.com/search/%E8%BF%99%E4%BB%B6%E4%BA%8B/' },
      { char: '大家都来了吗', url: 'https://forvo.com/search/%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%9D%A5%E4%BA%86%E5%90%97/' },
      { char: '谢谢大家', url: 'https://forvo.com/search/%E8%B0%A2%E8%B0%A2%E5%A4%A7%E5%AE%B6/' },
      ],
      english: `<span class="title">rejoice</span> ☜ <span class="esp">regocijarse</span> <span class="usage">(uncommon)</span><br><br>
      <span class="baal">𖤐︎</span> It has a strong religious connotation in English, so it's not used very much outside of that. You often hear it used like "rejoice in God," which would mean to feel or show great happiness in [the presence] of God. Because of that, it actually sounds more like people are saying they are thanking or praising God for the happiness they're feeling when they're "rejoicing" in something. At the same time, it also implies that the happiness they're feeling is similar to that of the angels rejoicing in heaven. All in all, it's not a typical word choice for a lot of people. Most people would say they're "so happy" or "ecstatic."</span> <span class="skull">☠︎︎</span> <span class="example">Rejoice in the name of the Lord!</span> <br><span class="baal">𖤐︎</span> It's possible in other contexts, but it sounds dramatic. Say "rejoice in/at/over".</span> <span class="skull">☠︎︎</span> <span class="example">They were rejoicing in the completion of the task.</span> <span class="skull">☠︎︎</span> <span class="example">Rejoice in your efforts to help deliver groceries for the old lady.</span>`,
      russian: `р<span class="stress">а</span>доваться <span class="esp">alegrarse, disfrutar, regocijarse, estar contento</span><br>
      <br><span class="sickle">☭</span> It takes the dative case when meaning "alegrarse de algo/disfrutar de", and uses за to mean "alegrarse por alguien"<span class="star">☆</span> Я очень обрадовался (=был очень рад), когда увидел Настю. <span class="star">☦</span> Мы радовались тому, что наш сын поступил в университет <span class="esp">Nos alegramos de que nuestro hijo entrara a la universidad</span> <span class="star">☆</span> Радуйся, что у тебя получилось. <span class="star">☦</span> Её зац<span class="stress">и</span>кленный на себе ум мешает ей искренне радоваться успехам других. <span class="esp">Su mentalidad egocéntrica le impide celebrar de manera sincera los éxitos de los demás.</span> <span class="star">☆</span> Она радовалась своей новой машине. <span class="esp">Disfrutaba de su nuevo carro.</span><br>
      <span class="sickle">☭</span> The standard perfective is обрадоваться, but it doesn't seem to go with за, in which case порадоваться should be used instead. You'd say обрадоваться чему-то, like "обрадоваться хорошей новости". <span class="star">☆</span>  Я бы хотела порадоваться за тебя, но не могу.<br>
      <span class="sickle">☭</span> Возрадоваться is more archaic/poetic/biblical`,
      inflection: `<span class="aspect">сов:</span> обрадоваться`,
      russianLinks: [
      { char: 'радоваться', url: 'https://ru.wiktionary.org/wiki/%D1%80%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `They lived happily ever after. <span class="esp">Vivieron felices para siempre.</span>`,
      russian: `...и жили они долго и счастливо и <span class="stress-y">у</span>мерли в один день
      <br><span class="sickle">☭</span> It works on its own, but the extended version adds "и умерли в один день". Also, you might hear an alternate version: Стали они жить-поживать, да добра наживать.`,
      inflection: `<span class="aspect">сов:</span> умер<span class="stress">е</span>ть <span class="aspect">несов:</span> умир<span class="stress">а</span>ть`,
      russianLinks: [
      { char: 'умереть', url: 'https://ru.wiktionary.org/wiki/%D1%83%D0%BC%D0%B5%D1%80%D0%B5%D1%82%D1%8C' },
      { char: 'жить', url: 'https://ru.wiktionary.org/wiki/%D0%B6%D0%B8%D1%82%D1%8C' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">optical shop</span> ☜ <span class="esp">óptica</span><br>
      An optical shop is a retail store that sells eyeglasses, contact lenses, and other vision care products.<br><br>
      <span class="baal">𖤐︎</span> You can "book an eye exam" or "make an appointment for an eye exam" <span class="esp">pedir una consulta/valoración</span> to "get your eyes checked/assessed", that is for routine check-ups. <span class="skull">☠︎︎</span> <span class="example">I need to get an eye exam.</span> <span class="skull">☠︎︎</span> <span class="example">The doctor assessed my eyes for signs of glaucoma</span> /glɔˈkoʊmə, glaʊ-/<span class="example">.</span><br>
      <span class="baal">𖤐︎</span> An optometrist /ɒpˈtɒmɪtrɪst/ provides routine primary vision care, while an ophthalmologist /of′thəl mol′ə jist, -thə-, -thal-, op′-/ is a medical and surgical doctor who treats complex eye diseases</span><br>
      <span class="baal">𖤐︎</span> myopia /maɪˈoʊpiə/</span>`,
      englishImages: [
      'https://ashevilleeye.com/wp-content/uploads/20190424-3Z2A7797AEA.jpg',
      ],
      russian: `<span class="stress">о</span>птика
      магазин оптики <span class="or">или</span> салон оптики (although the latter seems more formal) <br><br>
      <span class="sickle">☭</span> Пойти пров<span class="stress">е</span>рить зрение <span class="esp">Ir a una valoración/a que le revisen los ojos.</span> To say "pedir una cita", say "записаться на приём" or "запизаться к окулисту/глазн<span class="stress">и</span>ку (разг.)" <span class="star">☆</span> Надо сходить проверить зрение. <span class="esp">Tengo que ir a que me revisen los ojos.</span> <span class="star">☦</span> Я записался к окулисту на завтра <span class="esp">Pedí una cita con el oftalmólogo para mañana.</span> <span class="star">☆</span> Где тут можно записаться на приём? <span class="esp">Dónde se puede pedir cita por acá?</span> <span class="star">☦</span> Надо глаза проверить, давно не был<span class="esp"> Tengo que revisarme los ojos, hace rato no voy.</span> <span class="star">☆</span> К глазнику записался, зрение проверить. Что-то плохо вижу вдаль.<span class="esp"> Pedí cita con el oftalmólogo pa' revisarme la vista. Veo algo mal de lejos.</span>`,
      inflection: `<span class="aspect">несов:</span> зап<span class="stress">и</span>сываться <span class="aspect">сов:</span> запис<span class="stress">а</span>ться`,
      russianLinks: [
      { char: 'проверить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%82%D1%8C' },
      { char: 'записываться', url: 'https://ru.wiktionary.org/wiki/%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `What's the deal?<br><br>
      So what?`,
      russian: `А что? <span class="esp">Por? / Por qué la pregunta?</span><br>
      То есть: почему ты спрашиваешь? что-то случилось? <span class="star">☆</span> —Ты пойдёшь сегодня в магазни? —А что?<span class="esp"> —Hoy va a ir a la tienda? —Por?</span> <span class="star">☦</span> —Слушай, ты сегодня вечером свободен? —Вроде да. А что?<span class="esp"> —Oiga, hoy va a estar libre en la tarde? —Creería que sí. Por qué?</span><br><br>
      <span class="sickle">☭</span> It can also mean "y qué tiene de malo/raro?" when you think your behaviour or actions are okay and you justify them, or there's nothing wrong with a situation. A bit longer version is "А что такого? <span class="star">☆</span> А что такого плохого в том, чтобы отдыхать целый день?<span class="esp"> Y qué tiene de malo/qué hay de malo en descansar todo el día?</span> <span class="star">☦</span> —Ты почему взял чуж<span class="stress-y">у</span>ю ручку? —А что (такого)? Я просто полож<span class="stress-y">у</span> её на место.<span class="esp"> —Porqué cogió un lapicero que no es suyo? —Y qué tiene? Yo lo vuelvo a poner donde estaba.</span><br>
      <span class="sickle">☭</span> И что? <span class="esp"> Y? Algún problema?</span>`,
      inflection: `<span class="aspect">сов:</span> полож<span class="stress">и</span>ть <span class="aspect">несов:</span> класть / ложить`,
      russianLinks: [
      { char: 'чужой', url: 'https://ru.wiktionary.org/wiki/%D1%87%D1%83%D0%B6%D0%BE%D0%B9' },
      { char: 'положить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B8%D1%82%D1%8C' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `This side of a book is called "the spine", and the ones in this picture have raised beads.`,
      englishImages: [
      'https://media.istockphoto.com/id/185330935/photo/antique-books-on-a-shelf.jpg?s=612x612&w=0&k=20&c=rJ4mGQKdmOqUBmPM-brqiLZ3IMutXpqR4pdwFgooc-w=',
      ],
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">gap year</span> ☜ <span class="esp">año sabático</span><br>
      A gap year is a planned break of several months to a year taken from formal studies or work to focus on personal growth, travel, volunteering, or gaining job experience. <span class="skull">☠︎︎</span> <span class="example">I've taken a gap year from university.</span>`,
      russian: `год перерыв (general break year)
      академический отпуск (taken during university enrollment)<br><br>
      <span class="star">☆</span> —Ты уже поступил? —Нет, я взял год перерыва после школы. Хочу попутешествовать и понять, что вообще хочу. Гл<span class="stress">я</span>ну, что смогу за год сделать. <span class="esp"> —Ya entró (a la U)? —No, me tomé un año sabático después del colegio. Quiero viajar y pensar qué es lo que quiero. Voy a ver qué alcanzo a hacer este año.</span>`,
      inflection: `<span class="aspect">сов:</span> гл<span class="stress">я</span>нуть <span class="aspect">несов:</span> гляд<span class="stress">е</span>ть`,
      russianLinks: [
      { char: 'брать', url: 'https://ru.wiktionary.org/wiki/%D0%B1%D1%80%D0%B0%D1%82%D1%8C' },
      { char: 'глянуть', url: 'https://ru.wiktionary.org/wiki/%D0%B3%D0%BB%D1%8F%D0%BD%D1%83%D1%82%D1%8C' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">tongue in cheek</span> ☜ <span class="esp">en tono irónico, en broma</span><br>
      <span class="skull">☠︎︎</span> <span class="example">I didn't want to be too serious, so I gave a tongue-in-cheek answer.</span> <span class="skull">☠︎︎</span> [someones leaves a link to an article and says "From a reputable source" ironically because the source is BBC. And the other person replies:] <span class="example">Nice tongue in cheek.</span>`,
      russian: `пошутить<br>
      <span class="star">☆</span> Ты серьёзно обиделся? Он же пошутил!<span class="esp"> En serio se ofendió? Obviamente él estaba bromeando.</span> <span class="unpack">⟨WHERE</span> же adds that "come on, obviously"<span class="unpack">⟩</span> <span class="star">☦</span> Он явно шутил, ты чего?<span class="esp"> Claramente él estaba bromeando, qué le pasa/ud. qué?</span>`,
      inflection: `<span class="aspect">несов:</span> шут<span class="stress">и</span>ть <span class="aspect">сов:</span> пошут<span class="stress">и</span>ть`,
      russianLinks: [
      { char: 'шутить', url: 'https://ru.wiktionary.org/wiki/%D1%88%D1%83%D1%82%D0%B8%D1%82%D1%8C' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">sweep under the rug</span> ☜ <span class="esp">ocultar, esconder, barrer debajo de la alfombra</span><br>
      <span class="skull">☠︎︎</span> <span class="example">To conceal wasted city spending, the mayor attempted to sweep it under the rug by cancelling the public council meeting.</span> <span class="skull">☠︎︎</span> <span class="example">Don't just sweep your problems under the rug, face them head-on and find a solution</span> <span class="skull">☠︎︎</span> <span class="example">I knew the military would try to sweep his death under the rug. I won't let those bastards get away with this!</span> <span class="skull">☠︎︎</span> <span class="example">The company tried to sweep the scandal under the rug, but the truth eventually came out.</span><br><br>
      <span class="baal">𖤐︎</span> "Sweep away", in one of its meanings, means to be carried off or removed by a strong force of nature, like a flood, wave, or gust of wind. </span> <span class="skull">☠︎︎</span> <span class="example">The flood swept away the bridge</span> <span class="esp">La inundación se llevó (por delante) el puente.</span><br>
      <span class="baal">𖤐︎</span> cover tracks <span class="esp">encubrir, tapar, borrar/ocultar  las huellas</span> <span class="skull">☠︎︎</span> <span class="example">He tried to cover his tracks, but they found him.</span> <span class="skull">☠︎︎</span> <span class="example">The company is covering up financial fraud.</span><br>
      <span class="baal">𖤐︎</span> hush up, silence <span class="esp">silenciar</span> <span class="skull">☠︎︎</span> <span class="example">The authorities are hushing this up</span> <span class="skull">☠︎︎</span> <span class="example">The problem has been hushed up for years.</span><br>
      <span class="baal">𖤐︎</span> bury = you bury something deep so it never surfaces <span class="esp">(=resurgir, asomarse, aparecer, salir, salir a la luz)</span> — like an embarrassing memory or a secret. <span class="skull">☠︎︎</span> <span class="example">She buried that memory deep in her soul.</span> <span class="skull">☠︎︎</span> <span class="example"> Don't bury this problem — it'll surface anyway.</span><br>
      <span class="baal">𖤐︎</span> "hide" and "conceal" are universal verbs that can replace a lot of the verbs above.`,
      russian: `скрывать (ocultar, esconder)
      замести следы (encubrir/borrar huellas)<br>
      замолчать (esconder/silenciar)<br><br>
      Замести naturally goes with следы <span class="star">☆</span> Они скрывают этот скандал от общественности<span class="esp"> Están ocultando ese escándalo del público.</span> <span class="star">☦</span> Он пытался замести следы, но его нашли<span class="esp"> Trató de borrar las huellas pero lo encontraron.</span> <span class="star">☆</span> Компания заметает следы финансовых махин<span class="stress">а</span>ций<span class="esp"> La empresa está encubriendo el fraude financiero.</span> <span class="star">☦</span> Не замалчивай ошибки — признай их.<span class="esp"> No ocultes tus errores — admítelos.</span> <span class="star">☆</span> Вл<span class="stress">а</span>сти замалчивают эту историю<span class="esp"> Las autoridades están silenciando este caso.</span><br><br>
      <span class="sickle">☭</span> Заметать/замести in slang is also "llevar" in the sense of being arrested <span class="star">☆</span> Его замел<span class="stress">и</span><span class="esp"> Se lo llevaron.</span><br>
      <span class="sickle">☭</span> Say всплыть when a problem or case surfaces <span class="star">☆</span> Эти факты вспл<span class="stress">ы</span>ли в результате финансовой проверки.<span class="esp"> Estos hechos salieron a la luz como resultado de una auditoría financiera.</span> <span class="star">☦</span> <span class="stress">И</span>стина всплыл<span class="stress">а</span><span class="esp"> La verdad salió a la luz.</span>`,
      inflection: `<span class="aspect">несов:</span> скрывать <span class="aspect">сов:</span> скрыть
      <span class="aspect">несов:</span> замет<span class="stress">а</span>ть <span class="aspect">сов:</span> замест<span class="stress">и</span>
      <span class="aspect">несов:</span> зам<span class="stress">а</span>лчивать <span class="aspect">сов:</span> замолч<span class="stress">а</span>ть
      <span class="aspect">несов:</span> признав<span class="stress">а</span>ть <span class="aspect">сов:</span> призн<span class="stress">а</span>ть
      <span class="aspect">несов:</span> всплыв<span class="stress">а</span>ть <span class="aspect">сов:</span> всплыть
      власть <span class="aspect">ж</span>`,
      russianLinks: [
      { char: 'скрывать', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: 'заметать', url: 'https://ru.wiktionary.org/wiki/%D0%B7%D0%B0%D0%BC%D0%B5%D1%82%D0%B0%D1%82%D1%8C' },
      { char: 'замалчивать', url: 'https://ru.wiktionary.org/wiki/%D0%B7%D0%B0%D0%BC%D0%B0%D0%BB%D1%87%D0%B8%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: 'признавать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%B8%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: 'власть', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D1%8C' },
      ],
    },  
    {
      chinese: `快关窗户, (要)不然雨会进来
      <span class="pinyin"><span class="zh2">kuài</span> guān<span class="zh2"> chuānghu,</span> (yào)bùrán<span class="zh2"> yǔ</span> huì<span class="zh2"> jìnlái</span></span><br>
      <span class="lit"><span class="zh3">quick</span> close<span class="zh3"> window,</span> or-else<span class="zh3"> rain</span> will<span class="zh3"> come-in</span></span><br>
      <span class="esp">Cierre la ventana, que si no se entra la lluvia.</span><br><br>
      <span class="gold">要不然</span> or more colloquially 不然 means "o si no..." Natives use it when they’re pointing out what could go wrong if you don’t do something. <span class="circle-word">志</span> 快点儿, (要)不然会迟到<span class="pinyin"> kuài diǎn zǒu, (yào)bùrán huì chídào</span><span class="esp"> Córrale/Apúrele, que va a llegar tarde.</span> <span class="unpack">⟨WHERE</span> 迟到 arrive late<span class="unpack">⟩</span> <span class="circle-word">大</span> 你快跑，要不然就来不及了<span class="pinyin"> nǐ kuài pǎo, yàobùrán jiù láibují le</span><span class="esp"> Corra, que si no se le va a ser tarde</span> (=in the sense of not having enough time to do sth) <span class="unpack">⟨WHERE</span> 跑 run<span class="unpack">⟩</span> <span class="circle-word">济</span> 多喝点水, (要)不然容易生病<span class="pinyin"> duō hē diǎn shuǐ, (yào)bùrán róngyì shēngbìng</span><span class="esp"> Tome bastante agua, o puede que se enferme.</span> <span class="unpack">⟨WHERE</span> 容易 easy/likely<span class="unpack">⟩</span> <span class="circle-word">铭</span> 我们早点出发吧, (要)不然路上会很堵<span class="pinyin"> wǒmen zǎodiǎn chūfā ba, yàobùrán lùshang huì hěn dǔ</span><span class="esp"> Salgamos temprano, porque o si no va a haber más tráfico</span> <span class="unpack">⟨WHERE</span> 路上 on the road; 堵 block up (a road)<span class="unpack">⟩</span><br>
      🧧 儿 is generally northern accent, not used in Taiwan besides with its meaning "child/son". The 儿 drops the last consonant sound of the word that preceeds it. So 点 <span class="pinyin">diǎn</span> in 快点儿 becomes <span class="pinyin">diǎr</span>. Here are very frequent ones: 一点儿 a bit; 没事儿 it's nothing/nevermind; 这儿 here; 那儿 there; 哪儿 where?/anywhere/wherever; 一会儿 a moment (a Redditor says he's never heard this one said without the 儿); 好玩儿 fun; 羊肉串儿 lamb kebab; 冰块儿 ice cube; 吸管儿 straw. To write "wait a moment", use the 儿 -> 等一会儿.`,
      handwritten: `<span class="handwritten">快关窗户&nbsp;(&nbsp;要&nbsp;)不然雨会进来</span><br>`,
      traditional: `快<span class="trad">關</span>窗<span class="trad">戶</span>, (要)不然雨<span class="trad">會進來</span>`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E5%BF%AB.png',
      'https://dragonmandarin.com/media/hanzi5-%E7%AA%97.png',
      'https://dragonmandarin.com/media/hanzi5-%E6%88%B7.png',
      'https://dragonmandarin.com/media/hanzi5-%E8%A6%81.png',
      'https://dragonmandarin.com/media/hanzi5-%E9%9B%A8.png',
      'https://dragonmandarin.com/media/hanzi5-%E8%BF%9B.png',
      'https://dragonmandarin.com/media/hanzi5-%E6%9D%A5.png',
      ],
      links: [
      { char: '不然', url: 'https://forvo.com/search/%E4%B8%8D%E7%84%B6/' },
      { char: '要不然', url: 'https://forvo.com/search/%E8%A6%81%E4%B8%8D%E7%84%B6/' },
      { char: '快点儿', url: 'https://forvo.com/search/%E5%BF%AB%E7%82%B9%E5%84%BF/' },
      { char: '迟到', url: 'https://forvo.com/search/%E8%BF%9F%E5%88%B0/' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `а то... <span class="esp">(porque o) si no...</span>
      <span class="star">☆</span> Веди себя хорошо, а то попадёшь в тюрьму.<span class="esp"> Pórtese bien, o si no, se va a la cárcel.</span> <span class="star">☦</span> Я сказала ему, что з<span class="stress">а</span>мужем, а то ведь не отстал бы.<span class="esp"> Le dije que estaba casada, porque es que o si no, no me dejaba (en paz), pues.</span> <span class="unpack">⟨WHERE</span>  ведь adds that "pues" flavor in the sense of "as we both know", like "it's obvious".<span class="unpack">⟩</span> <span class="star">☆</span> Спеши/Потороп<span class="stress">и</span>сь, а то опоздаем.<span class="esp"> Córrale porque o si no, nos coge la tarde.</span><br><br>
      <span class="sickle">☭</span> а то is used colloquially to mean "hell yeah / claro, obvio" <span class="star">☆</span> —Пойдёшь? —А то, конечно пойду<span class="esp"> —Viene? —Obvio que voy!</span>`,
      inflection: `<span class="aspect">несов:</span> попад<span class="stress">а</span>ть <span class="aspect">сов:</span> поп<span class="stress">а</span>сть
      <span class="aspect">несов:</span> отстав<span class="stress">а</span>ть <span class="aspect">сов:</span> отст<span class="stress">а</span>ть`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'попадать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C' },
      { char: 'отстать', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D1%82%D1%81%D1%82%D0%B0%D1%82%D1%8C' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `interchangeable`,
      russian: `взаимозамен<span class="stress">я</span>емы`,
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      russian: `А что не так? <span class="esp">Y qué tiene (de malo)?</span>
      <span class="star">☆</span> Ну, а что не так с я<span class="stress">и</span>чницей? <span class="esp"> Y los huevos qué tienen de raro?</span> <span class="unpack">⟨WHERE</span> яичница is a dish made from eggs<span class="unpack">⟩</span> <span class="star">☦</span> А что не так с тем, как я одет?<span class="esp"> Y qué hay de malo en cómo visto?</span> <span class="star">☆</span> Что не так с твоим отцом?<span class="esp"> Qué le pasó a su papá?</span> (=what's the matter with your dad?) <span class="star">☦</span> —Зачем ты привёл дворн<span class="stress">я</span>гу в дом? —А что тут не так?<span class="esp"> —Para qué metió un perro de la calle a la casa? —Y qué tiene?</span> <span class="unpack">⟨WHERE</span> привёл is the past of привести (=traer)<span class="unpack">⟩</span> <span class="star">☆</span> —Давай, только не в то место, куда мы в прошлый раз ходили. —А что не так? Мне там нормально было.<span class="esp"> —Hágale, pero no al mismo lugar de la otra vez. —Qué tenía de malo? Para mí estuvo bien.</span> <span class="star">☦</span> —Этот фильм какой-то сучный. —А что не так? Мне он нравится.<span class="esp"> —Esa película es como aburrida. —Qué tiene? A mís me gusta. </span> <span class="star">☆</span> А что не так? Деньги у меня есть.<span class="esp"> Y qué? Tengo la plata.</span><br><br>
      <span class="sickle">☭</span> Other similar sentences: <span class="star">☆</span> Это не делается так. Делай так.<span class="esp"> Eso no se hace así. Hágalo así.</span> <span class="star">☦</span> С ним что-то не так.<span class="esp"> Algo le pasa (a él).</span> <span class="star">☆</span> Всё пошло не так.<span class="esp"> Todo salió mal.</span>`,
      inflection: `<span class="aspect">несов:</span> привод<span class="stress">и</span>ть <span class="aspect">сов:</span> привест<span class="stress">и</span>
      я<span class="stress">и</span>чница <span class="aspect">ж</span>`,
      russianLinks: [
      { char: 'привести', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%81%D1%82%D0%B8' },
      ],
    },  
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `облаж<span class="stress">а</span>ться <span class="esp">embarrarla</span><br>
      Какая разница между:<br>
      1. облажаться (slang)<br>
      2. проколоться (neutral)<br>
      3. промахн<span class="stress-y">у</span>ться (neutral) <span class="esp">fallar</span><br>
      По большому счёту это синонимы.
      Облажаться и проколоться - близкие по смыслу сл<span class="stress">е</span>нговые слова.<br>
      Проколоться - это сделать <span class="stress">я</span>вную ошибку, зам<span class="stress">е</span>тную окружающим (=<span class="esp">notable para los demás</span>). Сделать явным то, что вы старалиь скрыть.<br>
      Промахнуться - несёт отт<span class="stress">е</span>нок ош<span class="stress">и</span>бочного выбора (неправильный вариант, неправильный путь или образ действий). Буквально "промахн<span class="stress-y">у</span>ться" - это уд<span class="stress">а</span>рить или в<span class="stress">ы</span>стрелить мимо цели.<br>
      <span class="star">☆</span> В этот раз я не облажаюсь. <span class="star">☦</span> Вот так облажаешься один раз, а потом всё наперекос<span class="stress">я</span>к. <span class="esp">La embarras una vez y queda todo mal.</span> <span class="star">☆</span>  Только не налажай в этот раз, как ты обычно делаешь!<span`,
      inflection: `<span class="aspect">несов:</span> лаж<span class="stress">а</span>ть <span class="aspect">сов:</span> налаж<span class="stress">а</span>ть / облажаться
      <span class="aspect">несов:</span> прок<span class="stress">а</span>ливаться <span class="aspect">сов:</span> прокол<span class="stress">о</span>ться
      <span class="aspect">несов:</span> пром<span class="stress">а</span>хиваться <span class="aspect">сов:</span> промахн<span class="stress-y">у</span>ться
      <span class="aspect">несов:</span> нест<span class="stress">и</span> <span class="aspect">сов:</span> нанест<span class="stress">и</span>
      <span class="aspect">несов:</span> стрел<span class="stress">я</span>ть <span class="aspect">сов:</span> в<span class="stress">ы</span>стрелить
      <span class="aspect">несов:</span> удар<span class="stress">я</span>ть <span class="aspect">сов:</span> уд<span class="stress">а</span>рить`,
      russianLinks: [
      { char: 'облажаться', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D0%B1%D0%BB%D0%B0%D0%B6%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'лажать', url: 'https://ru.wiktionary.org/wiki/%D0%BB%D0%B0%D0%B6%D0%B0%D1%82%D1%8C' },
      { char: 'проколоться', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'промахнуться', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%BE%D0%BC%D0%B0%D1%85%D0%BD%D1%83%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'нести', url: 'https://ru.wiktionary.org/wiki/%D0%BD%D0%B5%D1%81%D1%82%D0%B8' },
      { char: 'ударить', url: 'https://ru.wiktionary.org/wiki/%D1%83%D0%B4%D0%B0%D1%80%D0%B8%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `Robbery (is) down 7.5% <span class="or">or</span> Robbery dropped/decreased 7.5%<br>
      The opposite is "[name of crime] up 7.5% <span class="or">or</span> spiked"<br>
      <span class="skull">☠︎︎</span> <span class="example">Subway crime has decreased — <u>second lowest</u> in 27 years.</span> <span class="skull">☠︎︎</span> <span class="example">Rape is up 4.1%</span> <span class="skull">☠︎︎</span> <span class="example">The increase in juvenile shooters piked by nearly 200%. That's a stat that's <u>looking really bad</u> here in the city.</span><br><br>
      <span class="baal">𖤐︎</span> Unlawful acts <span class="or">or</span> (criminal) offense <span class="or">or</span> criminal charges <span class="or">or</span> felonies <span class="esp">delito/crimen</span> (=a serious crime that carries a prison sentence):<br>
      - burglary: illegal entry into a building.<br>
      - arson /ˈɑrsən/ <span class="esp">incendio premeditado</span>: intentionally setting fire to a building, vehicle, or land.<br>
      - carjacking: stealing a car.<br>
      - (juvenile) shooting incidents<br>
      Note: misdemeanors <span class="esp">falta, delito menor</span> are not felonies, even though they may carry a jail sentence of less than a year. They're more serious than an infraction, but less than felonies.`,
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `A "die" is the word for a single cube, that is for one game piece; and "dice" for two or more.<br><br>
      <span class="baal">𖤐︎</span> Other game pieces:<br>
      - pawns: the chess pieces of the lowest value, and also the tokens in board games like parchis.<br>
      - tiles: thick squares or hexagons /ˈhɛksəˌgɑn/ (=a flat 6-sided polygon /ˈpɑliˌgɑn/).<br>
      - tokens: they refer to physical markers, chips, chits, or coins (tokens) for scoring, resource management, or tracking player actions; like for example the metal tokens (the dog, the top hat, the car).`,
      englishImages: [
      'https://assets.ltkcontent.com/images/162414/Die-vs-Dice_27c5571306.jpg',
      ],
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">blare</span> ☜ <span class="esp">retumbar, sonar a todo volumen; estruendo</span><br>
      <span class="skull">☠︎︎</span> <span class="example">You could hear the sirens blaring</span> <span class="skull">☠︎︎</span> <span class="example">Music blared from a passing car.</span> <span class="skull">☠︎︎</span> <span class="example">The blare of the loudspeaker is hurting my ears.</span>`,
      englishImages: [
      'https://',
      'https://'
      ],
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `We're making our way up Manhattan here... up towards Midtown. <span class="esp">Aquí estamos andando en pleno Manhattan... dirigiéndonos hacia Midtown.</span>`,
      englishImages: [
      'https://',
      'https://'
      ],
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">karate chop</span> ☜<br>
      A downward strike with the outer edge of an open hand. People karate chop to break wooden boards or bricks. <br>
      <span class="skull">☠︎︎</span> <span class="example">A was following a guy yesterday, who was karate chopping signs on the street. There were some sidewalk signs, and he'd come karate chopping in, and fall in the process, and then yell at the sign. So he wasn't all there (=<span class="esp">no estaba en su sano juicio</span>).</span>`,
      englishImages: [
      'https://t4.ftcdn.net/jpg/05/41/55/25/360_F_541552529_kWDPcqO6KdhANl3oGMJGDwx5jZUH47t9.jpg',
      ],
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">folding sidewalk sign <span class="or">or</span> A-frame sign</span> ☜<br>`,
      englishImages: [
      'https://www.slimlinewarehouse.com.au/static/products/7968/large_f1c117c3-9aa2-4cce-86ca-c1b96d9a4455.webp',
      ],
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">not be all there</span> ☜ <span class="esp">no estar en su sano juicio, no estar bien de la cabeza, estar chiflado</span><br>
      Not be mentally sound and act a bit crazy or foolish.
      <span class="skull">☠︎︎</span> <span class="example">He acts like he's not all there sometimes.</span> <span class="skull">☠︎︎</span> <span class="example">Don't mind him (=<span class="esp">No le hagas caso</span>), he's not all there.</span>`,
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">the be-all and end-all <span class="or">or simply</span> the be-all</span> ☜ <span class="usage">(very common)</span> <span class="esp">lo único (que importa); lo más de lo más</span><br>
      The most important thing (or the only important thing) and that it doesn’t need to be questioned. It can also mean the ultimate of something and don't need to look further for that type of thing. <span class="skull">☠︎︎</span> <span class="example">To many people Google is the be-all and end-all of search engines. Nobody talks about or uses any other search engines.</span> <span class="skull">☠︎︎</span> <span class="example">He thinks he is the be all and end all! (=he thinks too much of himself)</span> <span class="skull">☠︎︎</span> <span class="example">I think that is the be-all and end-all of this album. (=I think that nothing can beat this song on this album)</span>`,
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">nearly as much</span> ☜ <span class="esp">casi tanto como</span><br>
      <span class="title">not nearly as much</span> ☜ <span class="esp">no tanto, ni por asomo tanto</span><br>
      When using "not", you're comparing at least two things that are very far apart when it comes to a certain metric.
      <span class="skull">☠︎︎</span> <span class="example">You don't weigh nearly as much (as I do).</span> <span class="skull">☠︎︎</span> <span class="example">You're not worried nearly as much as you should be.</span> <span class="skull">☠︎︎</span> <span class="example">If you're gonna compare Los Angeles and homeless people <u>camping out on the streets</u>, I haven't seen nearly as much like there. I don't think there's a skid row (=<span class="esp">un bronx</span>) of New York.</span>`,
      russian: ``,
      inflection: `<span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `Что-нибудь слышно об этом? <span class="esp">Has escuchado algo de esto?</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `стало известно, что... <span class="esp">se supo/conoció que...</span><br>
      <span class="star">☆</span> Стало известно, что на него готовили покушение.<span class="esp"> Se supo que le prepararon un atentado en su contra.</span>`,
      inflection: `<span class="aspect">несов:</span> станов<span class="stress">и</span>ться <span class="aspect">сов:</span> стать`,
      russianLinks: [
      { char: 'стать', url: 'https://ru.wiktionary.org/wiki/%D1%81%D1%82%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `покуш<span class="stress">е</span>ние <span class="esp">atentado, intento de asesinato</span><br>
      <span class="star">☆</span> На президента было совершено покушение<span class="esp"> Le realizaron un atentado al presidente.</span> <span class="star">☦</span> Вчера произошло покушение на банк<span class="stress">и</span>ра - в него стрел<span class="stress">я</span>ли.<span class="esp"> Ayer hubo un atentado contra un banquero - le dispararon.</span> <span class="star">☆</span> В результате покушения, никто не пострадал.<span class="esp"> Nadie resultó herido como resultado/consecuencia del intento de asesinato.</span> <span class="star">☦</span> Покушение на жизнь офиц<span class="stress">е</span>ра не обошл<span class="stress">о</span>сь без стрельб<span class="stress">ы</span>. <span class="esp"> El atentado contra el oficial no estuvo exento de disparos.</span>`,
      inflection: `<span class="aspect">несов:</span> совершать <span class="aspect">сов:</span> совершить
      <span class="aspect">несов:</span> пострад<span class="stress">а</span>ть <span class="aspect">сов:</span> страд<span class="stress">а</span>ть
      <span class="aspect">несов:</span> обход<span class="stress">и</span>ться <span class="aspect">сов:</span> обойт<span class="stress">и</span>сь`,
      russianLinks: [
      { char: 'совершать', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B0%D1%82%D1%8C' },
      { char: 'пострадать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%B4%D0%B0%D1%82%D1%8C' },
      { char: 'обойтись', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D0%B1%D0%BE%D0%B9%D1%82%D0%B8%D1%81%D1%8C' },
      ],
    },
    {
      chinese: `每个地方都有"早点"<br>
      <span class="pinyin"><span class="zh2">měi</span> gè<span class="zh2"> dìfang</span> dōu <span class="zh2"> yǒu </span> zǎodiǎn</span><br>
      <span class="lit"><span class="zh3">each/every</span> [classifier]<span class="zh3"> place</span> all<span class="zh3"> have</span> "breakfast"</span><br>
      <span class="esp">En todos lados hay desayuno</span><br><br>
      <span class="gold">每</span> means "every", and it's normally used in the construction 每 + measure word +都. <span class="circle-word">丽</span> 我每天早上都吃早饭<span class="pinyin"> wǒ měitiān zǎoshang dōu chīzǎofàn</span><span class="esp"> Todas las mañanas desayuno.</span> <span class="unpack">⟨WHERE</span> 每天 everyday, 吃早饭 eat breakfast<span class="unpack">⟩</span> <span class="circle-word">珠</span> 我每次都点一样的菜<span class="pinyin"> wǒ měicài dōu diǎn yīyàng de cài</span><span class="esp"> Todas las veces pido el mismo plato</span> <span class="unpack">⟨WHERE</span> 菜 can be dropped to say 点一样的 (=pedir lo mismo); 菜 is used to refer to a specific dish<span class="unpack">⟩</span><br>
      🧧 每个人 <span class="esp">todos (y cada uno)</span> (points out individuals). 每一个人 stresses "each and everyone" <span class="circle-word">融</span> 我们每一个人都应该向他们学习<span class="pinyin"> wǒmen měiyīgèrén dōu yīnggāi xiàng tāmen xuéxí</span><span class="esp"> Cada uno de nosotros/Todos deberíamos aprender de ellos.</span> <span class="circle-word">吴</span> 每个人早上起床后都得刷牙<span class="pinyin"> měigèrén zǎoshang qǐchuáng hòu dōu děi shuāyá</span><span class="esp"> Todos tenemos que cepillarnos por la mañana después de levantarnos.</span> <span class="unpack">⟨WHERE</span> 后 after; 得 spoken way to say "have to"<span class="unpack">⟩</span><br>
      🧧 每场比赛 <span class="pinyin"> měi chǎng bǐsài</span> <span class="esp">cada partido/todos los partidos</span><br>
      🧧 每个周日 <span class="pinyin"> měigè zhōurì</span> <span class="esp">cada domingo/todos los domingos</span><br>
      🧧 每个阶段 <span class="pinyin"> měigè jiēduàn</span> <span class="esp">cada etapa/todas las etapas</span><br><br>
      <span class="gold">早点</span> seemingly is the word for "breakfast" on restaurant signs. 早饭 apparently refers more to the breakfast eaten at home or outside.`,
      handwritten: `每个地方都有&nbsp;"早点"`,
      traditional: `每<span class="trad">個</span>地方都有"早<span class="trad">點</span>"`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E6%AF%8F.png',
      'https://dragonmandarin.com/media/hanzi5-%E6%96%B9.png',
      'https://dragonmandarin.com/media/hanzi5-%E6%9C%89.png',
      'https://dragonmandarin.com/media/hanzi5-%E6%A0%B7.png',
      'https://dragonmandarin.com/media/hanzi5-%E8%8F%9C.png',
      ],
      links: [
      { char: '每个', url: 'https://forvo.com/word/%E6%AF%8F%E4%B8%AA/#zh' },
      { char: '地方', url: 'https://forvo.com/search/%E5%9C%B0%E6%96%B9/zh/' },
      { char: '都有', url: 'https://forvo.com/search/%E9%83%BD%E6%9C%89//' },
      { char: '早点', url: 'https://forvo.com/search/%E6%97%A9%E7%82%B9/' },
      { char: '每天', url: 'https://forvo.com/search/%E6%AF%8F%E5%A4%A9/' },
      { char: '早上', url: 'https://forvo.com/search/%E6%97%A9%E4%B8%8A/' },
      { char: '吃早饭', url: 'https://forvo.com/search/%E5%90%83%E6%97%A9%E9%A5%AD/' },
      { char: '每次', url: 'https://forvo.com/search/%E6%AF%8F%E6%AC%A1/' },
      { char: '一样', url: 'https://forvo.com/search/%E4%B8%80%E6%A0%B7/' },
      { char: '菜', url: 'https://forvo.com/search/%E8%8F%9C/' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `If I were a teacher, <u>would I look like it?</u> <span class="or">or</span> If I were a teacher, <u>would I appear to be one?</u>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `疫情的关系大家都减薪，这是大事，你可需要去跟每一个人解释清楚<br>
      <span class="esp">Todos han sufrido recortes salariales debido a la pandemia; esto es muy importante y hay que explicárselo claramente a todo el mundo.</span>`,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `—People sometimes <u>run out</u> with a sandwich (without paying), but when they get caught, sometimes they give it up [the sandwich], sometimes they don't.<br>
      —<u>Is there a lot of that these days?</u> (=has it happened a lot recently?)<br>
      —Well, I've seen it in this store, not in the other stores, tho. I would say at this location - pretty common.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `The security guard wanted to speak <u>on camera</u>, but he couldn't in uniform, so I <u>kept him off camera</u> [while recording].`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `On my way back from work, it's always a <u>single ride</u> (=I don't have to pay the metro and metrocable separately).`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">kick in</span> ☜ <span class="esp">tener efecto; empezar a (hacer viento, llover, etc.)</span><br>
      <span class="skull">☠︎︎</span> <span class="example">Adrenaline kicked in and I ran faster.</span> <span class="skull">☠︎︎</span> <span class="example">Her maternal instincts kicked in.</span> <span class="skull">☠︎︎</span> <span class="example">The pain kicked in about an hour later.</span> <span class="skull">☠︎︎</span> <span class="example">The jet lag is really kicking in now.</span> <span class="skull">☠︎︎</span> <span class="example">Nice breeze has kicked in.</span> <span class="esp">Empezó a hacer una rica brisa.</span> <span class="skull">☠︎︎</span> <span class="example">The rain kicked in just as we left.</span> <span class="skull">☠︎︎</span> <span class="example">The burglar kicked in the door (look at the image below).</span>`,
      englishImages: [
      'https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/svjizsixfivzeqzlevdz.jpg',
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">take on</span> ☜ <span class="esp">asumir (un desafío, trabajo); enfrentarse (a un oponente); cobrar (un significado, cualidad); contratar (empleados)</span><br>
      <span class="skull">☠︎︎</span> <span class="example">I took on too much work</span> <span class="skull">☠︎︎</span> <span class="example">They're ready to take on the champions.</span> <span class="skull">☠︎︎</span> <span class="example">Her face took on a worried expression.</span> <span class="skull">☠︎︎</span> <span class="example">The city takes on a magical feel at night.</span> <span class="esp">La ciudad cobra un aire mágico por la noche.</span> <span class="skull">☠︎︎</span> <span class="example">Stores take on extra employees during Christmas.</span> <span class="skull">☠︎︎</span> <span class="example">Many students take on a lot of debt while they are studying at univeristy.</span> <span class="esp">Mucho estudiantes adquieren...</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">...is a lot of that...</span> ☜ <span class="esp">...y tiene mucho de...; y se debe en gran parte a...</span><br>
      <span class="skull">☠︎︎</span> <span class="example">This city takes on a lot of different energies, and this part of the city slows it down, lowers the heart rate, blood pressure, and <u>it's a lot of that</u> almost European style.</span> <span class="skull">☠︎︎</span> <span class="example">His music is a lot of that 90s alternative feel.</span> <span class="skull">☠︎︎</span> <span class="example">—Why do you like her? —It's a lot of that confidence she has.</span> <span class="skull">☠︎︎</span> <span class="example">I love this restaurant. It's a lot of that homemade comfort food feel.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `I work for [facility maintenance provider company]. Just handyman work. <span class="esp">Trabajo en X. Haciendo arreglos/reparaciones.</span><br>
      A handyman (=empleado de mantenimiento) is a worker who does small repairs and makes things in houses or buildings.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">seizure</span> /ˈsiʒɚ/ ☜ <span class="esp">convulsión</span><br>
      <span class="skull">☠︎︎</span> <span class="example">Yesterday I had a seizure.</span> <span class="skull">☠︎︎</span> <span class="example">What does a seizure actually feel like?</span><br><br>`,
      englishLinks: [
      { char: 'seizure', url: 'https://forvo.com/search/seizure/en_usa/' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="esp">pasar por caja</span> go through the checkout, pay at the counter, go to the register<br>
      <span class="skull">☠︎︎</span> <span class="example">I walked out without going through the checkout = I left without paying.</span><br><br>
      <span class="baal">𖤐︎</span> Where are the registers(US)/checkouts(UK)? <span class="esp">Dónde están las cajas?</span><br>
      <span class="baal">𖤐︎</span> Where's the express lane? <span class="esp">Dónde está la caja rápida?</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `I had to move some things around to fit my schedule <span class="esp">Tuve que reacomodar unas cosas para cuadrar mis horario.</span><br>
      <span class="or">or</span><br>
      I had to rearrange/shuffle some things to align my schedule.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">shuffle</span> ☜<br>
      <span class="skull">☠︎︎</span> <span class="example">She stood there, shuffling her feet, waiting for the bus to arrive.</span> <span class="esp">...arrastrando los pies,...</span> (=moving your feet back and forth on the floor because you feel nervous or bored) <span class="skull">☠︎︎</span> <span class="example">He shuffled across the floor</span> (=walk slowly by sliding your feet without lifting them fully off the ground) <span class="skull">☠︎︎</span> <span class="example">The dealer shuffled the cards before passing them out.</span> <span class="skull">☠︎︎</span> <span class="example">Whose turn is to shuffle and deal?</span> <span class="esp">A quién le toca revolver y pasar?</span> <span class="skull">☠︎︎</span> <span class="example">The manager shuffled the shooting order</span> <span class="esp">El entrenador revolvió/cambió el orden de los pateadores.</span> <span class="skull">☠︎︎</span> <span class="example">I like to shuffle my playlist.</span><br><br>
      <span class="baal">𖤐︎</span> 'shuffle' is also a <u>style of dance</u>.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">noose</span> /nus/ ☜ <span class="esp">horcal, soga; nudo corredizo, laso</span><br>
      A loop formed in a cord or rope by means of a slipknot; it binds /baɪnd/ <span class="esp">(=se amarra)</span> tighter as the rope is pulled.<br>
      <span class="skull">☠︎︎</span> <span class="example">Steve was sentenced to the noose for his crime.</span> <span class="skull">☠︎︎</span> <span class="example">Kyle tied the rope into a noose.</span> <span class="skull">☠︎︎</span> <span class="example">He tied a noose at the end of the rope</span> <span class="skull">☠︎︎</span> <span class="example">They found a rope with a noose hanging from the tree.</span> <span class="skull">☠︎︎</span> <span class="example">X</span> <span class="skull">☠︎︎</span> <span class="skull">☠︎︎</span> <span class="example">The debt felt like a noose around his neck.</span> <span class="esp">La deuda se sentía como una soga al cuello.</span> <span class="example">The deadline is Friday, and the noose is tightening/closing in.</span>`,
      englishImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHCBrb5PV8PHa1eF6Knk5vgzKxsqs2AQhriB9QozeTpN5MGGJX4RJsqk&s=10',
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      russian: `вторг<span class="stress">а</span>ться <span class="esp">invadir, intervenir, entrometerse, inmiscuirse</span><br>
      It's used in formal settings, but can be used in conversations like in the first example below, although лезть is preferred in daily speech in the others.<br>
      <span class="star">☆</span> Вторгаться в моё личное пространство <span class="esp">Invadir mi espacio privado.</span> <span class="star">☦</span> Вторгаться в Ирак.`,
      inflection: `<span class="aspect">несов:</span> вторг<span class="stress">а</span>ться <span class="aspect">сов:</span> вт<span class="stress">о</span>ргнуться
      <span class="aspect">несов:</span> лезть <span class="aspect">сов:</span> полезть`,
      russianLinks: [
      { char: 'вторгаться', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D1%82%D0%BE%D1%80%D0%B3%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'лезть', url: 'https://ru.wiktionary.org/wiki/%D0%BB%D0%B5%D0%B7%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      russian: `лезть <span class="esp">escalar; meterse, intrometerse</span><br>
      <span class="star">☆</span> Не лезь не в своё дело <span class="esp">No se meta en lo que no es de usted.</span> <span class="star">☦</span> Она любит лезть в чужие дела <span class="star">☆</span> Хватит лезть куда не просят. <span class="esp">Deje de meterse donde lo llaman.</span> <span class="star">☦</span> Не лезь, сука ёбаный. Она тебя сожрёт. <span class="esp">Hijueputa marica, no se vaya meter. Se lo va a comer!</span>`,
      inflection: `<span class="aspect">несов:</span> лезть <span class="aspect">сов:</span> полезть
      <span class="aspect">несов:</span> сжир<span class="stress">а</span>ть <span class="aspect">сов:</span> сожр<span class="stress">а</span>ть`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'лезть', url: 'https://ru.wiktionary.org/wiki/%D0%BB%D0%B5%D0%B7%D1%82%D1%8C' },
      { char: 'соржать', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%BE%D0%B6%D1%80%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      russian: `Это другое уровень. <span class="esp">Eso ya es otro nivel.</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      russian: `В смысле? <span class="esp">Cómo así? En qué sentido?</span><br>
      <span class="sickle">☭</span> It can be used as part of the answer. <span class="star">☆</span> В мысле, это красивое платье.<span class="esp"> Pues, o sea, es un vestido bonito.</span> (=здесь "в смысле" представляется как "имею в виду")`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `влиять на + вин. п. <span class="esp">influir, afectar, impactar</span><br>
      <span class="star">☆</span> Разв<span class="stress">и</span>тие производства влияет на рост экономики<span class="esp"> El desarrollo de la producción influye en el crecimiento económico</span><br><br>
      <span class="sickle">☭</span> "Влиять" может использоваться в различных контекстах - позитивном, негативном или нейтральном. "Ск<span class="stress">а</span>зываться на чём-то" часто употребляется в негативном смысле. <span class="star">☆</span> Пь<span class="stress">я</span>нство ск<span class="stress">а</span>зывается на здоровье.<span class="esp"> Beber afecta a tu salud.</span>`,
      inflection: `<span class="aspect">несов:</span> влиять <span class="aspect">сов:</span> повлиять
      <span class="aspect">несов:</span> сказываться <span class="aspect">сов:</span> сказ<span class="stress">а</span>ться`,
      russianLinks: [
      { char: 'влиять', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D0%BB%D0%B8%D1%8F%D1%82%D1%8C' },
      { char: 'сказываться', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      russian: `Если будет пиво, мне будет отвратительно. <span class="esp">Si tomo cerveza, me voy a sentir horrible.</span><br>
      Я стараюсь пить, когда... ну, когда двигаюсь. То есть, если я пошла там танцевать куда-то в караоке, я пью. А дома просто сидеть пить, я так не делаю. <span class="esp">Trato de tomar cuando estoy moviéndome, o sea si voy a algún lado a bailar o al karaoke, entonces sí tomo. Pero en la casa sentarme a tomar, no.</span>`,
      inflection: `<span class="aspect">несов:</span> сидеть
      <span class="aspect">несов:</span> пить <span class="aspect">сов:</span> в<span class="stress">ы</span>пить
      <span class="aspect">несов:</span> стараться <span class="aspect">сов:</span> постараться`,
      russianLinks: [
      { char: 'сидеть', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%B8%D0%B4%D0%B5%D1%82%D1%8C' },
      { char: 'пить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%B8%D1%82%D1%8C' },
      { char: 'стараться', url: 'https://ru.wiktionary.org/wiki/%D1%81%D1%82%D0%B0%D1%80%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      ],
    },
    {
      chinese: `好 | 好的 | 好啦 | 好吧 | 好了 | 好啊<br>
      <span class="esp">bueno, listo, ok, hágale</span><br><br>
      All these three mean "ok, got it, sure". The first one is neutral/formal, the second is informal as well as the third. They are ways to respond to acknowledge what someone said (=listo), accept a request or suggestion (=hágale, sí), or confirm that you understand or are following along in a conversation, even reluctantly.<br><br>
      <span class="gold">好</span> (informal) A general and neutral response, like when a waitress comes to you and asks if you'd like ice in your water, and you answer "好 ok".<br><br>
      <span class="gold">好的</span> (formal and polite, can still be used with friends) When responding respectfully. <span class="circle-word">如</span> —你需要每天吃这个药, 一天三次. —好的 (or simply 好).<span class="pinyin"> —nǐ xūyào měitiān chī zhège yào, yī tiān sān cì —hǎode</span><span class="esp"> —Ud. necesita tomarse esta medicina, tres veces al día. —Bueno.</span> <span class="circle-word">亡</span> —我们去看电影吧. —好的.<span class="pinyin"> —wǒmen qù kàn diànyǐng ba. —hǎode.</span><span class="esp"> —Veámonos una película/Vayamos a cine. —Bueno, hágale.</span> <span class="circle-word">素</span> —明天三点见 —好的, 不见不散<span class="pinyin"> —míngtiān sāndiǎn jiàn —hǎode, bùjiànbùsàn</span><span class="esp"> —Mañana nos encontramos/vemos a las 3. —Hágale, nos vemos (allá).</span> <span class="unpack">⟨WHERE</span> 三点 3 o'clock<span class="unpack">⟩</span> <span class="circle-word">着</span> —我把地址发给你了 —好的, 收到(了)<span class="pinyin"> —wǒ bǎ dǐzhǐ fā gěi nǐ (le). —hǎode, shōudào le.</span><span class="esp"> —Le mandé la dirección. —Listo, ya la recibí.</span> <span class="unpack">⟨WHERE</span> 收到 receive<span class="unpack">⟩</span> <span class="circle-word">境</span> 好的, 我会尽快完成 <span class="pinyin">hǎode, nǐ huì jǐnkuài wánchéng</span> <span class="esp">Listo, hágale. Lo termino lo más pronto posible.</span> <span class="unpack">⟨WHERE</span> 尽快 as soon as possible; 完成 to complete<span class="unpack">⟩</span><br><br>
      <span class="gold">好啦</span> Used to express a little impatience (=sí, ya, ya escuché). <span class="circle-word">传</span> 她说了太多次这个故事, 所以她的儿子说: "好啦，我已经知道了"<span class="pinyin"> tā shuō le tài duōcì zhège gùshì, suǒyǐ tā de érzi shuō: "hǎola, wǒ yǐjīng zhīdào le"</span><span class="esp"> Ella había contado esa historia tantas veces que su hijo le dijo, "Sí-sí, ya me la sé."</span> <span class="unpack">⟨WHERE</span>故事 story; 儿子 son; 已经 already<span class="unpack">⟩</span><br>Also used to gently persuade someone to stop (=bueno, ya, ya [but softer and warmer]) <span class="circle-word">觉</span> 好啦, 你不要生气了. <span class="pinyin">hǎola, nǐ bùyào shēngqì le</span> <span class="esp">Bueno, ya, no se ponga bravo.</span><br>Used to introduce a sentence, resume a conversation, change the topic... <span class="circle-word">孟</span> 他打断了我们的对话, 说: "好啦, 你们想吃什么? <span class="pinyin">tā dǎduàn le wǒmen de duìhuà, shuō: "hǎola, nǐmen xiǎng chī shénme?</span> <span class="esp">Interrupió la conversación y dijo, "Qué quiere comer?"</span><br><br>
      <span class="gold">好吧</span> is the reluctant "bueno", showing a hint of resignation or concession, like lack of enthusiasm, like "fine, whatever". <span class="circle-word">画</span> —你必须十点前回家 —好吧, 我知道了 <span class="pinyin">—nǐ bìxū shí diǎn qián huí jiā —hǎoba, wǒ zhīdào le</span> <span class="esp">Ud. tiene que volver a la casa antes de las 10. —Sí, bueno, ya sé.</span><br><br>
      <span class="gold">好了</span> means "done!" or "enough, stop it", and in the first meaning, it can be preceded by the main verb. <span class="circle-word">兴</span> 好了 <span class="esp">Listo. Ya (terminé).</span> <span class="circle-word">雷</span> —作业写了没? —写好了 <span class="pinyin">—zuòyè xiě le méi? —xiě hǎole</span> <span class="esp">—Ya hizo la tarea? —Sí, ya.</span> <span class="circle-word">着</span> 饭做好了! <span class="pinyin">fàn zuò hǎole</span> <span class="esp">La comida ya está lista!</span> <span class="circle-word">石</span> 好了好了, 我知道了 <span class="pinyin">hǎole hǎole, wǒ zhīdào le</span> <span class="esp">Ya, ya, ya entendí.</span> <span class="circle-word">桃</span> 病好了 <span class="pinyin">bìng hǎole</span> <span class="esp">Ya me recuperé (de la enfermedad)</span><br>But it can be used similarly to 好啦 in all its senses, but more firmly/sharply.<br><br>
      <span class="gold">好啊</span> is a more enthusiastic way to say "sure!" (=hágale, de una)`,
      handwritten: `好 |&nbsp;好的 |&nbsp;好啦 |&nbsp;好吧 |&nbsp;好了 |&nbsp;好啊`,
      traditional: `好 | 好的 | 好啦 | 好吧 | 好了 | 好啊`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E5%95%A6.png',
      'https://dragonmandarin.com/media/hanzi5-%E5%95%8A.png'
      ],
      links: [
      { char: '好的', url: 'https://forvo.com/search/%E5%A5%BD%E7%9A%84/' },
      { char: '好啦', url: 'https://forvo.com/search/%E5%A5%BD%E5%95%A6/zh/' },
      { char: '好啦', url: 'https://forvo.com/search/%E5%A5%BD%E5%95%A6/zh/' },
      { char: '生气', url: 'https://forvo.com/search/%E7%94%9F%E6%B0%94/' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `в том числе<br>
      и не только<br>
      среди прочих (more formal)<br>
      одной из многих<br>
      и прочее (at the end of a list)<br>
      и тому подобнее (at the end of a list)<br>
      <span class="star">☆</span> Одна из причин — в том числе (и) неспособность управлять.<span class="esp"> Una de las razones es, entre otras, la incapacidad de gobernar.</span> <span class="star">☦</span> Провал проекта объясняется, не только этим, но и некомпетентностью руководства/начальства.<span class="esp"> El fracaso del proyecto se explica, y no solamente, por la incompetencia de la dirección/administración.</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `Administrative divisions:<br>
      - subdivisions <span class="esp">subregiones</span>: las subregiones de Antioquia son Urabá, Bajo Cauca, Magdalena Medio, Oriente, etc.<br>
      - county: there's possibly not an official administrative equivalent in Colombia, but inside the subdivisions in Antioquia, there are inner divisions called "zonas", which <u>might tentatively /ˈtɛntətɪvli/, and loosely be called counties in English, though the comparison only goes so far</u> (=<span class="esp">llega hasta cierto punto/tiene límites</span>), since they surely don't have the same administrative powers.<br>
      - rural district <span class="or">or</span> rural division <span class="esp">vereda</span><br>
      - municipality <span class="esp">municipio</span><br>
      - locality/borough/district <span class="esp">localidad</span>: <br>
      - rural settlement <span class="esp">asentamiento rural</span><br><br>
      <span class="baal">𖤐︎</span> Sometimes there is no exact equivalent for legal terms, due to different systems, and you need to use the Spanish, and then add a parenthetical note or a footnote. This is the only way to solve the indifference.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `наблюдаться <span class="esp">observarse, presentarse, experimentar</span><br>
      <span class="star">☆</span> Идент<span class="stress">и</span>чная ситуация может наблюдаться в других случаях. <span class="esp"> Se puede observar una situación idéntica en otros casos.</span> <span class="star">☦</span> У пожил<span class="stress">ы</span>х людей могут наблюдаться поб<span class="stress">о</span>чные эффекты.<span class="esp"> Los adultos mayores pueden experimentar efectos secundarios <span class="or">или</span> Se pueden observar efectos secundarios en adultos mayores.</span><br>
      <span class="star">☆</span> В регионе наблюдается рост безработицы.<span class="esp"> En la región se ha observado un crecimiento en el desempleo.</span><br>
      <span class="or">или</span><br>
      Регион пережил резкий рост населения. <span class="esp">...vivió un crecimiento acelerado de población.</span><br>
      <span class="or">или</span><br>
      Компания показала рост в 15%. <span class="esp">...mostró un crecimiento del 15%.</span><br>
      <span class="or">или</span><br>
      У нас в<span class="stress">ы</span>росли продажи. <span class="esp">Hemos tenido un crecimiento en las ventas.</span>`,
      inflection: `<span class="aspect">несов:</span> наблюдаться <span class="aspect">сов:</span> ?
      <span class="aspect">несов:</span> пережив<span class="stress">а</span>ть <span class="aspect">сов:</span> пережить
      <span class="aspect">несов:</span> выраст<span class="stress">а</span>ть <span class="aspect">сов:</span> в<span class="stress">ы</span>расти`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'наблюдаться', url: 'https://ru.wiktionary.org/wiki/%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'пережить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%B5%D1%80%D0%B5%D0%B6%D0%B8%D1%82%D1%8C' },
      { char: 'в<span class="stress">ы</span>расти', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D1%8B%D1%80%D0%B0%D1%81%D1%82%D0%B8' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `в<span class="stress">о</span>йско <span class="esp">tropa</span><br>
      <span class="star">☆</span> Армия разм<span class="stress">е</span>тит войск<span class="stress">а</span> в городе для защиты от потенциальных угроз.<span class="esp"> El ejército destinará tropas en el pueblo para protegerlo de posibles amenazas.</span> <span class="star">☦</span> Командиры разм<span class="stress">е</span>тят войска в удалённых районах для поддержания оборин<span class="stress">и</span>тельных позиций.<span class="esp"> Los comandantes destinarán tropas en áreas remotas para mantener una posición defensiva.</span>`,
      inflection: `<span class="aspect">несов:</span> размеч<span class="stress">а</span>ть <span class="aspect">сов:</span> разм<span class="stress">е</span>тить`,
      russianLinks: [
      { char: 'войско', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D0%BE%D0%B9%D1%81%D0%BA%D0%BE' },
      { char: 'разметить', url: 'https://ru.wiktionary.org/wiki/%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%B8%D1%82%D1%8C' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `крепкие алкогольные/спиртные напитки <span class="esp">bebidas alcohólicas fuertes</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `перенос<span class="stress">и</span>ть/вынос<span class="stress">и</span>ть <span class="esp">tolerar, soportar, aguantar</span><br>
      <span class="star">☆</span> Я не перенош<span class="stress-y">у</span>/вынош<span class="stress-y">у</span> жару.<span class="esp"> Yo no soporto el calor.</span> <span class="star">☦</span> Не выношу эту боль.<span class="esp"> No aguanto este dolor.</span> <span class="star">☆</span> Я не переношу этот шум.<span class="esp"> No aguanto ese ruido.</span> <span class="star">☦</span> Он не вын<span class="stress">о</span>сит женских слёз.<span class="esp"> No soporta las lágrimas de una mujer.</span> <span class="star">☆</span> Не переношу молоко. У меня неперенос<span class="stress">и</span>мость лактозы.<span class="esp"> La leche me cae mal. Tengo intolerancia a la lactosa.</span><br>
      <span class="sickle">☭</span> When using переносить, one can add плохо or хорошо, not with выносить. For example, "Я плохо переношу жару", or "Я хорошо переношу жару, но плохо переношу холод." <span class="star">☆</span> Плохо переношу перелёты.<span class="esp"> No cae bien volar.</span><br>
      <span class="sickle">☭</span> It can also be used reflexively, but it's probably less common <span class="star">☆</span> Крепкие спиртные напитки мне переносятся легче.<span class="esp"> Los licores fuertes los tolero más fácilmente.</span>`,
      inflection: `<span class="aspect">несов:</span> перенос<span class="stress">и</span>ть <span class="aspect">сов:</span> перенести
      <span class="aspect">несов:</span> вынос<span class="stress">и</span>ть <span class="aspect">сов:</span> вынести`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'переносить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%B5%D1%80%D0%B5%D0%BD%D0%BE%D1%81%D0%B8%D1%82%D1%8C' },
      { char: 'выносить (scroll further down to the second meaning)', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D1%8B%D0%BD%D0%BE%D1%81%D0%B8%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `I have never heard anyone in the US use the word "hamlet" <u>for anything other than</u> the theatrical production`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">(can) only go so far</span> ☜ <span class="esp">ir hasta cierto punto, tener un límite, no ser suficiente por sí solo</span><br>
      <span class="baal">𖤐︎</span> It can be used literally or figuratively. <span class="skull">☠︎︎</span> <span class="example">Your old car will only go so far before it breaks down.</span> (literal sense) <span class="skull">☠︎︎</span> <span class="example">Hard work is important, but it can only go so far. Sometimes, you need luck or connections to succeed.</span> <span class="skull">☠︎︎</span> <span class="example">Education can take you far, but it can only go so far in terms of securing a job. Practical experience and networking are also crucial.</span><br><br>
      <span class="baal">𖤐︎</span> Other similar expressions are:<br>
      - can only do so much<br>
      - can only take you so far<br>
      - but that's as far as it goes<br>
      <span class="skull">☠︎︎</span> <span class="example">When it comes to reaching your goals in life, having a college degree only takes you so far.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">It's picking up</span> ☜ <span class="esp">Se está reactivando / Se está poniendo bueno.</span><br>
      It means when a business is doing well, especially if it wasn't before, so you would say my business is picking up well or doing better, thus making more money and is more stable.<br>
      <span class="skull">☠︎︎</span> <span class="example">Sales are slow now, but business usually picks up in the spring.</span> <span class="skull">☠︎︎</span> <span class="example">—How is it going right now in the city? —Good. Busy. It picked up. They're doubling offices now. —Offices are filling back up a bit? —Yeah.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `It changed <u>from when</u> we were younger. (=things are very different now compared to how they were before)`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">roam out</span> ☜ <span class="esp">callejear; deambular, vagar</span><br>
      <span class="skull">☠︎︎</span> <span class="example">I don't let my kids out too much, like, roaming out. But they get to do certain things. We do things, but I don't let them hang out with all the knuckleheads (=<span class="esp">güevones</span>) around the neighborhood.</span><br><br>
      <span class="baal">𖤐︎</span> "knucklehead" is used to call someone "stupid" but in a silly/inoffensive way. Its exact meaning is someone that does things without thinking about the consequences. If you saw someone try to perform a stunt or trick because it looks cool without considering if it might be dangerous, you might call them a knucklehead. It's not as harsh as "stupid", but still, it's not as soft as "silly" or "goofy". Close translations may be "güevón, atembado".<br><br>
      <span class="baal">𖤐︎</span> "roam" can be used in everyday examples, like "I roamed around the hotel" (=estuve andando por el hotel).`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `всякий <span class="esp">todo tipo de</span> (=close to разный)<span class="esp">; puro/pura; cada</span> (=close to каждый)<br>
      <span class="star">☆</span> От всяких кокт<span class="stress">е</span>йлей (м. коктейль), от вина, пива мне плохо очень потом. <span class="esp">Todo tipo de cócteles, el vino y la cerveza me hacen sentir muy mal después.</span> <span class="star">☦</span> На прил<span class="stress">а</span>вке были разл<span class="stress">о</span>жены всякие товары. <span class="esp">Había todo tipo de mercancías dispuestas sobre el mostrador.</span> <span class="star">☆</span> Ходят тут всякие. <span class="esp"> Por aquí deambula gente de todo tipo. </span> <span class="star">☦</span> Пусть всякий/каждый, кто умеет плавать, возьмёт себе п<span class="stress">а</span>лку. <span class="esp">Todo aquel que sepa nadar, que coja un palo.</span> (Here "пусть всякий возьмёт..." doesn't work without a specific attribute "кто умеет плавать", but "пусть каждый возьмёт" works) <span class="star">☆</span> Я совершал всякие пост<span class="stress-y">у</span>пки. (singular is пост<span class="stress-y">у</span>пок) <span class="esp">He cometido todo tipo de actos.</span> <span class="star">☦</span> Всякий труд почётен. <span class="esp">Todo trabajo es honrado/digno.</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `подчеркнуть <span class="esp">subrayar, destacar, recalcar, resaltar</span><br>
      <span class="star">☆</span> Мы с тобой много раз обсуждали. Я лишь только подчеркн<span class="stress-y">у</span>, что...<span class="esp"> Ya lo hemos discutido contigo varias veces. Solo destacar que...</span> <span class="star">☦</span> В своей статье он стремился подчеркнуть необходимость голосование на выборах. <span class="esp">En su artículo, buscó resaltar la necesidad de votar en las elecciones.</span>`,
      inflection: `<span class="aspect">несов:</span> подчёркивать <span class="aspect">сов:</span> подчеркнуть`,
      russianLinks: [
      { char: 'подчеркнуть', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%B4%D1%87%D0%B5%D1%80%D0%BA%D0%BD%D1%83%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `раст<span class="stress">и</span> <span class="esp">crecer</span><br>
      <span class="star">☆</span> Он рос в США многие годы зад<span class="stress">о</span>лго до прибытия в Россию. <span class="esp">Creció en EE.UU. durante muchos años, mucho antes de llegar a Rusia.</span> <span class="star">☦</span> Ты быстро растёшь. <span class="esp">Estás creciendo muy rápido.</span> <span class="star">☆</span> Ананасы раст<span class="stress-y">у</span>т за границей. <span class="esp">Las piñas crecen en otros países (fuera de Rusia).</span> <span class="star">☦</span> Расти по карьерной лестнице. <span class="esp">Ascender en la escala profesional.</span> <span class="star">☆</span> Стоимость жизни за один год в<span class="stress">ы</span>росла на 2,3 процента. <span class="esp">Tras un año, el costo de vida aumentó un 2,3%.</span>`,
      inflection: `<span class="aspect">несов:</span> расти <span class="aspect">сов:</span> в<span class="stress">ы</span>расти`,
      russianLinks: [
      { char: 'расти', url: 'https://ru.wiktionary.org/wiki/%D1%80%D0%B0%D1%81%D1%82%D0%B8' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `зад<span class="stress">о</span>лго до <span class="esp">mucho antes</span><br>
      <span class="star">☆</span> Задолго до знакомства. <span class="esp">Mucho antes de conocernos.</span> <span class="star">☦</span> Этот дом сто<span class="stress">я</span>л здесь задолго до моего рождения. <span class="esp">Esta casa ya estaba mucho antes de yo nacer.</span><br>
      <span class="sickle">☭</span> To mean "mucho después", say "намного позже" or "долгое время после..." <span class="star">☆</span> Часто люди обращаются с заявлением намного позже. <span class="esp">La gente normalmente denuncia mucho tiempo después.</span> <span class="star">☦</span> Эти изменения могут длиться долгое время после непосредсвенного воздействия. <span class="esp">Estos cambios pueden durar mucho tiempo después de los efectos inmediatos.</span>`,
      inflection: `<span class="aspect">несов:</span> стоять <span class="aspect">сов:</span> постоять
      <span class="aspect">несов:</span> обращ<span class="stress">а</span>ться <span class="aspect">сов:</span> обрат<span class="stress">и</span>ться`,
      russianLinks: [
      { char: 'стоять', url: 'https://ru.wiktionary.org/wiki/%D1%81%D1%82%D0%BE%D1%8F%D1%82%D1%8C' },
      { char: 'обращаться', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">hook up</span> ☜ <span class="esp">conectar, enganchar</span><br>
      <span class="skull">☠︎︎</span> <span class="example">Go hook up the trailer to the truck.</span> <span class="skull">☠︎︎</span> <span class="example">Let's hook up the PlayStation to the TV.</span> <span class="skull">☠︎︎</span> <span class="example">Between 9am and 12m, they will be here to hook up the Internet.</span> <span class="skull">☠︎︎</span> <span class="example">There mic wasn't wired, but it still hooked up to the speakers remotely.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `Sorry for the late notice.<br>
      <span class="or">or</span><br>
      Sorry for letting you know so last minute.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `An aware/awakened/watchful/vigilant/alert society/people. <span class="esp">Un pueblo despierto.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">get popped</span> ☜ <span class="esp">ser arrestado; que le den bala</span><br>
      <span class="skull">☠︎︎</span> <span class="example">There was a 13-year-old over there one time. He was wheeling, and I told him, "Oh wheelie your bike, wheelie!" He said, "you wanna get popped?" The little kid had a gun on him. I was like "holy shit, where's his parents?"</span> <span class="skull">☠︎︎</span> <span class="example">He got popped for speeding (=taken into legal custody).</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `He talked pretty much <u>the whole way</u> <span class="esp">Habló todo el camino/trayecto.</span><br>
      It rained the whole way.
      It was just pimps and hoes, pretty much just the whole way.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `облад<span class="stress">а</span>ть <span class="esp">tener, poseer, contar con, disponer de, ser dueño de</span><br>
      <span class="star">☆</span> Она обладает з<span class="stress">а</span>мком за 10 миллионов долларов. <span class="esp">Es dueña de una mansión valorada en 10 millones de dólares.</span> <span class="star">☦</span> В принципе по закону премьер-министр не может обладать двойн<span class="stress">ы</span>м гражданством. <span class="esp">...no puede contar con/poseer doble nacionalidad.</span> <span class="star">☆</span> Они обладают трем<span class="stress">я</span> скакун<span class="stress">а</span>ми. (м. скак<span class="stress-y">у</span>н) <span class="esp">Tienen tres caballos árabes.</span> <span class="star">☦</span> ...обладает такими качествами, как... <span class="esp">...posee cualidades como...</span> <span class="star">☆</span> Она обладает талантом рисования. <span class="esp">Ella posee un talento para dibujar.</span> <span class="star">☦</span> Он обладает премией Оскар. <span class="esp">Cuenta con un premio Oscar.</span> <span class="star">☆</span> Руководитель должен обладать лидерскими качествами. <span class="esp">Un jefe debe tener cualidades de liderazgo.</span> <span class="star">☦</span> Модели обязаны обладать соответствующей фигурой и внешностью. <span class="esp">Una modelo debe contar con una figura correspondiente/adecuada y un físico.</span> <span class="star">☆</span> Магнит обладает способностью прит<span class="stress">я</span>гивать металлические предметы. <span class="esp">Un imán tiene la propiedad de atraer objetos metálicos.</span> <span class="star">☦</span> Обладать чувством ответственности/юмора/такта/прекрасного/языка/слова... <span class="esp">Tener/Poseer el sentido de responsabilidad/humor/tacto/belleza/lenguaje/palabra...</span> <span class="star">☆</span> Обадать чувством собственного достоинства. <span class="esp">Tener autoestima / dignidad propia.</span> <span class="star">☦</span> Обладать женщиной. (=в сексуальном плане) <span class="esp">Hacer a una mujer suyo(?)</span>`,
      inflection: `<span class="aspect">несов:</span> обладать
      <span class="aspect">несов:</span> прит<span class="stress">я</span>гивать <span class="aspect">сов:</span> притян<span class="stress-y">у</span>ть`,
      russianLinks: [
      { char: 'обладать', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D0%B1%D0%BB%D0%B0%D0%B4%D0%B0%D1%82%D1%8C' },
      { char: 'притягивать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%B8%D1%82%D1%8F%D0%B3%D0%B8%D0%B2%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `идут сп<span class="stress">о</span>ры о... <span class="esp">hay discusiones sobre...</span><br><span class="star">☆</span> На протяж<span class="stress">е</span>ние десятилетий идут споры о способности северокорейского промышленности нал<span class="stress">а</span>дить регулярный процесс обогащения урана и производства оружейного плутония. <span class="esp">Desde hace décadas hay discusiones sobre la capacidad de la industria norcoreana de mantener un proceso estable de enriquecimiento de uranio y producción de plutonio para sus armas.</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `двойн<span class="stress">о</span>й <span class="esp">doble</span><br>
      <span class="star">☆</span> Двойная порция еды. <span class="esp">Doble porción de comida.</span> <span class="star">☦</span> Двойная доза лекарства. <span class="esp">Doble dosis.</span> <span class="star">☆</span> Двойные окна <span class="esp">Doble ventanal</span> <span class="star">☦</span> Двойное нажатие кл<span class="stress">а</span>виши <span class="esp">Doble clic</span> <span class="star">☆</span> Он ведёт двойную жизнь (=обманывает партнёра может быть). <span class="esp">Lleva una doble vida.</span> <span class="star">☦</span> двойной подбор<span class="stress">о</span>док <span class="esp">papada</span> <span class="star">☆</span> двойное гражданство <span class="esp">doble nacionalidad</span>`,
      inflection: `<span class="aspect">ж:</span> клавиша`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `по закону <span class="esp">por ley</span><br>
      <span class="star">☆</span> В принципе по закону премьер-министр не может облад<span class="stress">а</span>ть двойным гражданством. <span class="esp">...no puede contar con/poseer doble nacionalidad.</span>`,
      inflection: `<span class="aspect">несов:</span> обладать`,
      russianLinks: [
      { char: 'обладать', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D0%B1%D0%BB%D0%B0%D0%B4%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `самооблад<span class="stress">а</span>ние/самоконтроль <span class="esp">autocontrol, calma, compostura</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `пренебреж<span class="stress">е</span>ние <span class="esp">desdén</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `тихая г<span class="stress">а</span>вань <span class="esp">puerto seguro, oasis de tranquilidad, refugio tranquilo</span><br>
      Спокойное для работы, жизни, и т. п. место`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `укрыть <span class="esp">tapar (=cubrir con algo)</span>, -ся <span class="esp">refugiarse; protegerse (de)</span>
      скрыть <span class="esp">tapar (=la verdad); esconder; encubrir</span><br>
      <span class="star">☆</span> Я уверен, что когда закончтися его политическая карьера, он беж<span class="stress">и</span>т в США. Укр<span class="stress">о</span>ется там или его там будут укрывать. <span class="esp">Estoy seguro que cuando se termine su carrera política, se va a ir corriendo a EE.UU. Se va a refugiar allá, o lo van a refugiar.</span> <span class="star">☦</span> Укрыться одеялом. <span class="esp">Taparse con la cobija.</span> <span class="star">☆</span> Коррумп<span class="stress">и</span>рованные чин<span class="stress">о</span>вники скрыли ул<span class="stress">и</span>ки (ж. ул<span class="stress">и</span>ка) от следствия. <span class="esp">Funcionarios corruptos escubrieron las pruebas de la investigación.</span> <span class="star">☦</span> Скрыть правду. ("укрыть" здесь не говорят) <span class="esp">Esconder/Tapar la verdad.</span> <span class="star">☆</span> Я скрываю, что я смотрю мультики. <span class="esp">Yo oculto que veo caricaturas.</span> <span class="star">☦</span> Укрылся пл<span class="stress">е</span>дом. (м. плед - see image below) <span class="esp">Me tapé con un mantel.</span>`,
      inflection: `<span class="aspect">несов:</span> укрыв<span class="stress">а</span>ть <span class="aspect">сов:</span> укр<span class="stress">ы</span>ть
      <span class="aspect">несов:</span> скрыв<span class="stress">а</span>ться <span class="aspect">сов:</span> скрыть
      <span class="aspect">двувидовой:</span> беж<span class="stress">а</span>ть`,
      russianImages: [
      'https://s22221.cdn.ngenix.net/media/catalog/product/cache/1/small_image/750x1000/1d22751c11b9015277302b488490e858/t/g/tgs860398-031025-00.jpg.webp',
      ],
      russianLinks: [
      { char: 'укрывать', url: 'https://ru.wiktionary.org/wiki/%D1%83%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: 'скрывать', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: 'бежать', url: 'https://ru.wiktionary.org/wiki/%D0%B1%D0%B5%D0%B6%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: `播客<br>
      bōkè<br>
      <span class="esp">podcast</span><br><br>
      The pronunciation of 播 bō sounds like "buo" with a subtle "u". <span class="circle-word">直</span> 昨天晚上洗衣服的时候, 我找到一个讲足球的播客 <span class="pinyin">zuótiān wǎngshang xǐ yīfu deshíhou, wǒ zhǎodào yī gè jiǎng zúqiú de bōkè</span> <span class="esp">Anoche mientras labava la ropa encontré un podcast donde hablan de fútbol.</span> <span class="unpack">⟨WHERE</span> 洗 wash; 的时候 when/while; 讲 speak/talk about; 足球 football<span class="unpack">⟩</span>`,
      handwritten: `播客`,
      traditional: `播客`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E6%92%AD.png',
      'https://dragonmandarin.com/media/hanzi5-%E7%90%83.png'
      ],
      links: [
      { char: '播客', url: 'https://forvo.com/search/%E6%92%AD%E5%AE%A2/' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `聊<br>
      liáo<br>
      <span class="esp">hablar, conversar</span><br><br>
      <span class="circle-word">梅</span> —今天我们聊什么? —要聊, 呃, 你喜不喜欢自己 <span class="pinyin">—jīntiān wǒmen liáo shénme? —yào liáo, è, nǐ xǐ bù xǐhuān zìjǐ</span> <span class="esp">—Hoy de qué vamos a hablar? —Vamos a hablar de, eeeh, de si te quieres a ti mismo.</span>`,
      handwritten: `聊`,
      traditional: `聊`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E8%81%8A.png',
      'https://dragonmandarin.com/media/hanzi5-%E7%90%83.png'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="esp">retomar =</span><br>
      resume work, a conversation, your studies...<br>
      <span class="or">or</span><br>
      get back to work, the topic, what we were talking about...<br>
      <span class="or">or</span><br>
      pick up a project again, my exercise routine again, the guitar again...<br>
      <span class="or">or</span><br>
      regain / take back the initiative...`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">pull under</span> ☜ <span class="esp">hundir</span><br>
      <span class="skull">☠︎︎</span> <span class="example">The tide pulled the young girl under and she drowned.</span> <span class="skull">☠︎︎</span> <span class="example">The waves pulled me under.</span> <span class="skull">☠︎︎</span> <span class="example">Be careful near the deep end (=<span class="esp">el lado más hondo de la piscina</span>) so the current doesn't pull you under.</span> <span class="skull">☠︎︎</span> <span class="example">The heavy mud began to pull my boot under.</span> span class="skull">☠︎︎</span> <span class="example">I forgot to pay my car bill, and this expenses are really pulling me under.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `Вот как..., вот так... <span class="esp">Así como..., (también)...</span>
      <span class="star">☆</span> Вот как Россия укрывает Башара Асада и Януковича, вот так США будут укрывать Нетаньяху. <span class="esp">Así como Rusia le da refugio a Bashar al-Asad, (así también) EE.UU. va a refugiar a Netanyahu.</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `<span class="esp">domingo =</span><br>
      星期天 <span class="pinyin">xīngqītiān</span> (conversational)<br>
      星期日 <span class="pinyin">xīngqīrì</span> (slightly more formal and can sound weird if you say it aloud)<br>
      周日 <span class="pinyin">zhōurì</span> (formal, official announcements)<br>`,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E6%9C%9F.png',
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `有时候 <span class="or">or</span> 偶尔<br>
      yǒushíhou ǒuěr<br>
      <span class="esp">a veces</span><br><br>
      In normal speech, Chinese would use 有时候 or 偶尔, whichever comes to mind first, and there's not really a difference in meaning in practical terms, even though 偶尔 fits "de vez en cuando" to highlight something is done with less frequency than just "sometimes", but it's perfectly interchangeable with 有时候. The shorter form 有时 is also used, only it sounds a bit more formal.<br>
      <span class="circle-word">末</span> 你经常去看电影吗? —不, 只是偶尔才去.<span class="pinyin">—nǐ jīngcháng qù kàn diànyǐng ma? —bù, zhǐshì ǒuěr cái qù</span> <span class="esp">—Ud. va al cine a menudo/con frecuencia? —No, de vez en cuando / a veces.</span> <span class="unpack">⟨WHERE</span> 经常 often, 电影 movie; 只是 only; 才 means literally "only then" (but in this example, it adds more restriction in the frequency, like even "more rarely")<span class="unpack">⟩</span>`,
      handwritten: `有时候 | 偶尔`,
      traditional: `有時候 | 偶爾`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E5%80%99.png',
      'https://dragonmandarin.com/media/hanzi5-%E5%81%B6.png'
      ],
      links: [
      { char: '有时候', url: 'https://forvo.com/search/%E6%9C%89%E6%97%B6%E5%80%99/' },
      { char: '偶尔', url: 'https://forvo.com/search/%E5%81%B6%E5%B0%94/' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">poison drip</span> ☜ <span class="esp">veneno lento</span><br>
      A slow, continuous delivery of something harmful or toxic, such as constant negative words, toxic influence, or deceit.<br>
      <span class="skull">☠︎︎</span> <span class="example">—Why don't you ever <u>stand up to</u> your bitch wife (=<span class="esp">cuándo se le va a parar a...</span>) when she puts you down? —Well, maybe she's right most of the times. —You are so being poison dripped my friend.</span> <span class="skull">☠︎︎</span> [on Sam Altman's quote on AI] <span class="example">We've been on a very slow poison drip in our IV (=intravenous /ɪntrəˈvinəs/ ) for the past 4 decades... Now this shit is an average Tuesday.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">lay person/people</span> ☜ <span class="usage">(slightly formal)</span> <span class="esp">gente del común e inexperta</span><br>
      Other possibilities:<br>
      the general public, regular people/folks, ordinary people (common)<br>
      <span class="skull">☠︎︎</span> <span class="example">They, him and his cohort are doing this: Hegelian dialect, confuse the lay people, then have them weed each other out (=<span class="esp">depurar, eliminar, filtrar</span>), and drop the reproduction rate.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">shortfall</span> ☜ <span class="esp">déficit</span><br>
      The gap or difference between what you have and what you actually need.<br>
      <span class="skull">☠︎︎</span> <span class="example">Critical <u>population drops below replacement</u>, and then it's the 2nd or 3rd entry for AI to solve the shortfall.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">shooting fish in a barrel</span> ☜ <span class="esp">pan comido, papita pal loro</span><br>
      <span class="skull">☠︎︎</span> <span class="example">For a hacker, <u>breaking into</u> that system was like shooting fish in a barrel.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">weed out</span> ☜ <span class="esp">filtrar, eliminar, descartar, depurar</span><br>
      To remove or get rid of unwanted, inferior, or unqualified people or things from a group.<br>
      <span class="skull">☠︎︎</span> <span class="example">The company weeded out the underperformers</span> <span class="skull">☠︎︎</span> <span class="example">The coach weeded out the players who weren't committed.</span> <span class="skull">☠︎︎</span> <span class="example">We need to weed out the errors in the report.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">dystopian</span> ☜ <span class="esp">distópico</span><br>
      It describes and imaginary society in which there is a lot of suffering and injustice, and where people lead (=<span class="esp">llevar una vida</span>) dehumanized, fearful lives.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `How to pronounce "route"? No standard version, so people pronounce whichever way it comes to them. Although there's a tendency to pronounce it like "stout" as a verb, and like "hoot" as a noun.`,
      englishLinks: [
      { char: 'U.S. dialects map', url: 'https://www.businessinsider.com/american-english-dialects-maps-2018-1#theres-a-ton-of-variation-in-how-people-pronounce-route-13' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">spare a thought for...</span> ☜ <span class="esp">pensar en, acordarse de...</span><br>
      <span class="skull">☠︎︎</span> <span class="example">You should spare a thought for those who are less fortunate.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `Sam Altman should <u>go the Kirk route</u>. <span class="esp">Sam Altman debería seguir el camino de [Charlie] Kirk.</span> (=someone should kill him)`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">drool at...</span> ☜ <span class="esp">babearse con...</span><br>
      You drool at a thought, an idea, a prospect of winning a prize...<br>
      <span class="skull">☠︎︎</span> <span class="example">He's not talking to us. He's talking to all the money hungry sociopaths that drool at the idea of being able to monetize literally everything.</span> <span class="skull">☠︎︎</span> <span class="example">Investors drool at the throught of high profits.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">brainrot</span> ☜ <span class="esp">basura en redes sociales que fritan el cerebro</span><br>
      <span class="skull">☠︎︎</span> <span class="example">Does he intend to lobotomize everyone with brainrot so people rely on his product for "intelligence"?</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `власть <span class="esp">poder, gobierno<span>
      <span class="star">☆</span> Скорее всего он пок<span class="stress">и</span>нет Израиль после того, что потеряет власть. <span class="esp">Lo más seguro es que abandone Israel cuando pierda el poder.</span>`,
      inflection: `<span class="aspect">несов:</span> покид<span class="stress">а</span>ть <span class="aspect">сов:</span> пок<span class="stress">и</span>нуть`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `нам<span class="stress">е</span>рение (нейтрально) <span class="esp">intención</span><br>
      <span class="stress-y">у</span>мысел (часто негативно) <span class="esp">(mala) intención</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `так вот <span class="esp">(bueno,) entonces...</span><br>
      Used to resume, conclude, introducing a main point...`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `отдельно, по отдельности <span class="esp">por separado</span><br>
      <span class="star">☆</span> Смотрите каждое слово по отдельности, чтоб не путаться. <span class="esp">Mira cada palabra por separado para que no te confundas</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `перевоз<span class="stress">и</span>ть <span class="esp">trasladar/mover (en transporte)</span><br>
      <span class="star">☆</span> Он уже свою семью постепенно туда перев<span class="stress">о</span>зит. <span class="esp">Él ya poco a poco va traslandando su familia a allá.</span> <span class="star">☦</span> Перевезти мебель в квартиру. <span class="esp">Llevar un mueble al apartamento.</span>`,
      inflection: `<span class="aspect">несов:</span> перевоз<span class="stress">и</span>ть <span class="aspect">сов:</span> перевезт<span class="stress">и</span>`,
      russianLinks: [
      { char: 'перевозить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B7%D0%B8%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `озаб<span class="stress">о</span>ченность (ж.) <span class="esp">preocupación</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `недв<span class="stress">и</span>жимость (ж.) <span class="esp">propiedad, bienes raíces, inmueble</span>
      <span class="star">☆</span> Инвестиции в недвижимость. <span class="esp">Invertir en propiedades.</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `задаться вопросом <span class="esp">preguntarse</span><br>
      <span class="star">☆</span> И нужно задаться вопросом, а что стоит за этим всем? <span class="esp">Y uno se pregunta, ¿qué hay detrás de todo esto?</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `пребыв<span class="stress">а</span>ть (formal) <span class="esp">estar, encontrarse, residir</span><br>
      Находиться в каком-либо месте или состоянии.<br>
      <span class="star">☆</span> Я пребываю в состоянии эйфории. <span class="esp">Estoy/Me encuentro en un estado de euforia.</span> <span class="star">☦</span> Сэенсэй пребывает в медитации. <span class="esp">El senséi se encuentra/halla meditando.</span> <span class="star">☆</span> Долгое время я пребывал в нев<span class="stress">е</span>дении. <span class="esp">Por mucho tiempo me hallaba/estaba sumido en la ignorancia.</span> <span class="star">☦</span> Да пребудет с твобой сила. <span class="esp">Qué la fuerza te acompañe.</span> <span class="star">☆</span> Пребываю в шоке. <span class="esp">Estoy en shock.</span> <span class="star">☦</span> Наш ум может пребывать в другом пространственном измер<span class="stress">е</span>нии. <span class="esp">La mente podría alojarse/hallarse/residir/morar/encontrarse en otra dimensión espacial.</span> <span class="star">☆</span> Вы должны пребывать по адресу проп<span class="stress">и</span>ски. <span class="esp">Ud. debe residir en la dirección registrada.</span> <span class="star">☦</span> Я пребываю в Москве. <span class="esp">Resido en Moscú.</span>`,
      inflection: `<span class="aspect">несов:</span> пребыв<span class="stress">а</span>ть <span class="aspect">сов:</span> преб<span class="stress">ы</span>ть`,
      russianLinks: [
      { char: 'пребывать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%B5%D0%B1%D1%8B%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `м<span class="stress">е</span>тко <span class="esp">acertado, preciso, con acierto (dicho de una frase)<br>
      Точно в цель. Без промаха.<br>
      <span class="star">☆</span> Стрелять метко <span class="esp">Disparar preciso/con acierto.</span> <span class="star">☦</span> Метко сказал. Точно в<span class="stress">ы</span>разил смысль. <span class="esp">Lo dijo con todo el acierto. Expresó la idea con precisión.</span> <span class="star">☆</span> Он редго говорит, но метко (=почти никогда говорит, но когда говорит, всегда в точку.) <span class="star">☦</span> Босс редко критикует сотрудников, но когда делает это, то всегда в ситуациях, когда это необходимо.<br><br>
      <span class="sickle">☭</span> There's the fixed expression "Пью редко, но метко" meaning "I rarely drink, but when I do, I mean business = Tomo muy de vez en cuando, pero cuando tomo, tomo bastante."`,
      inflection: `<span class="aspect">несов:</span> выраж<span class="stress">а</span>ть <span class="aspect">сов:</span> в<span class="stress">ы</span>разить`,
      russianLinks: [
      { char: 'выразить', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D1%8B%D1%80%D0%B0%D0%B7%D0%B8%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `в основном только <span class="or">или просто</span> в основном (also used in conversation) <span class="esp">sobretodo, en su mayoría</span>
      <span class="star">☆</span> Я обычно тоже вино пью, в последнее время Киндзмараули в оснавном только. <span class="esp">Normalmente también tomo vino, últimamente Kindzmarauli sobretodo.</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `доход<span class="stress">и</span>ть <span class="esp">llegar</span><br>
      <span class="star">☆</span> То есть доходит до вас? <span class="or">или</span> Это к вам туда доходит? <span class="esp">Pero entonces [nombre de producto] llega hasta donde usted?</span>`,
      inflection: `<span class="aspect">несов:</span> доход<span class="stress">и</span>ть <span class="aspect">сов:</span> дойти`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'доходить', url: 'https://ru.wiktionary.org/wiki/%D0%B4%D0%BE%D1%85%D0%BE%D0%B4%D0%B8%D1%82%D1%8C' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `是不是<br>
      <span class="esp">no?</span><br><br>
      Can be placed after a statement as a tag question "isn't it?", or in the middle of a question for a yes/no question with the verb 是 <span class="circle-word">洁</span> —她是不是你的女朋友? —不是 <span class="pinyin">—tā shì bù shì nǐ de nüpéngyou? —bù shì</span> <span class="esp">—Ella es su novia? —No.</span> <span class="circle-word">寿</span> 她很美丽, 是不是? <span class="pinyin">tā hǎo měilì, shì bù shì?</span> <span class="esp">Ella es linda. No?</span>`,
      handwritten: `是不是`,
      traditional: `是不是`,
      strokeOrderImages: [
      'https://dragonmandarin.com/media/hanzi5-%E7%BE%8E.png',
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `觉得 vs. 想<br>
      <span class="esp">creo que, pienso que, siento que, creería que...</span><br><br>
      <span class="gold">觉得</span> when you are giving an opinion, how you feel about a topic/situation. <span class="circle-word">秋</span> 我觉得这是一个很重要的话题 <span class="pinyin">wǒ juéde zhè shì yī gè hěn zhòngyào de huàtí</span> <span class="esp">Pienso/Creo que es un tema muy importante.</span> <span class="circle-word">僧</span> 我觉得中文其实没有那么难 <span class="pinyin">wǒ juéde zhōngwén qíshí méi yǒu nàme nán</span> <span class="esp">Pienso/Creo que el chino no es tan difícil, la verdad</span> <span class="unpack">⟨WHERE</span> 其实 actually; 难 difficult/difficulty<span class="unpack">⟩</span> <span class="circle-word">洪</span> 我想今天不会来 <span class="pinyin">wǒ xiǎng jīntiān bù huì lái</span> <span class="esp">No creo que él vaya a venir hoy.</span><br><br>
      <span class="gold">想</span> is completely interchangeable with 觉得, althought some might tend to use 想 for predictions, while they tend to default to 觉得 for expressing opinions. 想 conveys more the act of thinking (more cerebral thinking). On the other hand, it also expresses a wish or desire. <span class="circle-word">铁</span> 让我想想吧 <span class="pinyin">ràng wǒ xiǎngxiǎng ba</span> <span class="esp">Déjeme yo lo pienso.</span> <span class="circle-word">烂</span> 我想试一试 <span class="pinyin">wǒ xiǎng shìyīshì</span> <span class="esp">Quiero/Quisiera intentarlo.</span>`,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `лиш<span class="stress">и</span>ться <span class="esp">perder, perderse (algo), quedarse sin</span><br>
      <span class="star">☆</span> Я лишился гарантии. <span class="esp">Me perdí la garantía.</span> (de un producto) <span class="star">☦</span> В итоге может лишиться одной или даже об<span class="stress">е</span>их работ. <span class="esp">Al final puede quedarse sin uno o incluso sin los dos trabajos.</span><br><br>
      <span class="sickle">☭</span> According to Викисловарь, there's another acceptable declension for обе in conversation. See link above.`,
      inflection: `<span class="aspect">несов:</span> лиш<span class="stress">а</span>ться <span class="aspect">сов:</span> лиш<span class="stress">и</span>ться
      <span class="aspect">м/с:</span> <span class="stress">о</span>ба <span class="aspect">ж:</span> <span class="stress">о</span>бе`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'лишиться', url: 'https://ru.wiktionary.org/wiki/%D0%BB%D0%B8%D1%88%D0%B8%D1%82%D1%8C%D1%81%D1%8F' },
      { char: 'оба/обе', url: 'https://ru.wiktionary.org/wiki/%D0%BE%D0%B1%D0%B0' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `до фиг<span class="stress">а</span> (разг.) <span class="esp">un montón</span><br>
      When used with a verb, it goes into third person singular. Like in English "A ton of people <u>is</u> coming".<br>
      <span class="star">☆</span> Там до фига дос<span class="stress">о</span>к вал<span class="stress">я</span>ется. <span class="esp">Allá hay un mero montón de tablas ahí tiradas.</span> <span class="star">☦</span> У него денег до фига. <span class="esp">Está tapado en plata.</span> <span class="star">☆</span> Есть типа до фига разных инструментов/т<span class="stress">е</span>хник для создания эффекта старения. У кого-нибудь есть советы, какие из них лучше всего подходят для каких примен<span class="stress">е</span>ний? <span class="esp">Hay como un sinfín de herramientas/técnicas differentes para crear un effecto de envejecimiento. Alguien tiene algún consejo sobre cuáles son mejores para qué usos/aplicaciones?</span>`,
      inflection: `<span class="aspect">несов:</span> вал<span class="stress">я</span>ться <span class="aspect">сов:</span> none?`,
      russianLinks: [
      { char: 'валяться', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D0%B0%D0%BB%D1%8F%D1%82%D1%8C%D1%81%D1%8F' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `那<br>
      <span class="pinyin">nà</span><br>
      <span class="esp">entonces...</span><br><br>
      <span class="circle-word">牢</span> 那我想聊这个话题 <span class="pinyin">nà wǒ xiǎng liáo zhè gè huà tí</span> <span class="esp">Entonces quisiera hablar de este tema.</span>`,
      handwritten: `那`,
      traditional: `那`,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },    
    {
      chinese: `视频 <span class="pinyin">shìpín</span> <span class="esp">video</span><br><br>
      <span class="circle-word">洞</span> 是因为昨天我看了一个视频 <span class="pinyin">shì yīnwèi zuótiān wǒ kàn le yī gè shìpín</span> <span class="esp">Es porque ayer vi un video.</span>`,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `然后 <span class="pinyin">ránhòu</span> <span class="esp">y (entonces)</span><br><br>
      <span class="circle-word">凹</span> 昨天我看了一个视频， 然后在这个视频里，有一个人在聊足球 <span class="pinyin">zuótiān wǒ kàn le yī gè shìpín, ránhòu zài zhè gè shìpín lǐ, yǒu yī gè rén zài liáo zúqiú</span> <span class="esp">Ayer vi un video, y en ese video había un man hablando de fútbol.</span> <span class="circle-word">摩</span> 他们就要告诉我一个数字, 然后我把这个题目抽出来给大家念一下题目是什么 <span class="pinyin">tāmen jiùyào gàosu wǒ yī gè shùzì, ránhòu wǒ bǎ zhè gè tímù chōuchū lái gěi dàjiā niàn yīxià tímù shì shénme</span> <span class="esp">Ellos ya me van a decir un número, y (entonces) yo saco la pregunta para todos, y les leo lo que dice la pregunta.</span> <span class="unpack">⟨WHERE</span> 就要 about to do/going to; 题目 subject/title/topic; 抽出 take out; 念 read aloud; 一下 (after a verb) give it a go<span class="unpack">⟩</span>`,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">seedy</span> ☜ <span class="usage">(common for places, but uncommon for people)</span> <span class="esp">de dudosa reputación, moridero, una olla, antro, de mala muerte</span><br>
      A seedy place is a dangerous place where illegal things may happen.<br>
      <span class="skull">☠︎︎</span> <span class="example">The side of town across from the train tracks is seedy.</span> <span class="skull">☠︎︎</span> <span class="example">This place was known for being seedy, but now it's safe for children of all ages.</span> <span class="skull">☠︎︎</span> <span class="example">He stayed in a seedy hotel.</span> <span class="esp">Se quedó en un hotelucho.</span> <span class="skull">☠︎︎</span> He got involved in a seedy business.</span> <span class="esp">Se metió en un negocio turbio.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `I remember my dad had my hands, and he was, like, <u>running me through the street</u>, 'cause it was sketchy <u>in those times</u>. <span class="esp">Recuerdo que mi papá me sostenía de la mano, corriendo la calle, porque era bastante peligroso en esos tiempos.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<u>As far as life</u> down here, I mean, it's really come back. <span class="esp">Lo que es la vida acá, ha mejorado muchísimo.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">take the temperature of</span> ☜ <span class="esp">medir el ambiente, tantear el terreno</span><br>
      <span class="skull">☠︎︎</span> <span class="example">If we're gonna take the temperature of the amount of tourists here, well, I'm seeing a lot of people. I'm surprised with this heat. The thought people would not be out, you know.</span> <span class="skull">☠︎︎</span> <span class="example">The poll is meant to take the temperature of public opinion.</span> <span class="skull">☠︎︎</span> <span class="example">He took the temperature of the team/room before making changes.</span> <span class="skull">☠︎︎</span> <span class="example">I wanted to take the temperature of the situation first.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `It's a hot one. <span class="esp">Hoy está haciendo calor.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">make what you will (of it/that) <span class="or">or</span> make of that what you will</span> ☜ <span class="esp">sacar sus propias conclusiones, ya verá ud. cómo lo interpreta, allá ud. lo que quiera pensar de eso, a saber</span><br>
      <span class="baal">𖤐︎</span> "make what of that what you will" is far more common or popular than the reversed structure according to Google Ngram.<br>
      <span class="skull">☠︎︎</span> <span class="example">I shared the facts with you, and you can make what you will of them.</span> <span class="skull">☠︎︎</span> <span class="example">—I had an argument with her yesterday. —Are you still upset with each other? —I don't know. She called me to ask if I had seen her yellow scarf. So, make of that what you will.</span>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `пол<span class="stress">я</span>к (м.) / п<span class="stress">о</span>лька (ж.) <span class="esp">polaco/a</span>`,
      russianLinks: [
      { char: 'поляк', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%BB%D1%8F%D0%BA' },
      { char: 'полька', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%BB%D1%8C%D0%BA%D0%B0' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `русскояз<span class="stress">ы</span>чный<br>
      англоязычный<br>
      испаноязычный<br>
      китаязычный<br>
      арабоязычный`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `магаз<span class="stress">и</span>нчик (ласковое к магазин; кажется часто используется)<br>
      <span class="star">☆</span> Просто магазинчиков тут тоже, ну, достаточно хватает. <span class="esp">Es que por acá también hay bastantes tiendas.</span> <span class="star">☦</span> Тут полно всяких магазинчиков. <span class="esp">Por acá hay un montón de tiendas.</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `собираться <span class="esp">ir a (hacer algo); reunirse</span><br>
      <span class="star">☆</span> Я собираюсь поехать в Турцию. <span class="esp">Voy a viajar a Turquía.</span> <span class="star">☦</span> Мафия вот у нас собирается постоянно. Две мафии у нас в Чикаго постоянно собираются. <span class="esp">Grupos de Mafia—aquí muchas veces se reúnen (para jugar Mafia). Aquí en Chicago hay dos grupos que se reúnen todas las veces.</span> <span class="star">☆</span> Активисты собрались возле п<span class="stress">а</span>мятника Пушкина. <span class="esp">Activistas se congregaron cerca del momumento a Pushkin.</span>`,
      inflection: `<span class="aspect">несов:</span> собираться <span class="aspect">сов:</span> собраться`,
      russianLinks: [
      { char: 'собираться', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D1%82%D1%8C%D1%81%D1%8F' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `вед<span class="stress-y">у</span>щий <span class="esp">anfitrión, moderador</span><br>
      <span class="star">☆</span> А вот я был на прошлом матче, у нас там день рождения было у ведущего.<span class="esp">Y pues estuve en la última partida, y era el cumpeaños del anfitrión.</span>`,
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `каль<span class="stress">я</span>н <span class="esp">cachimba</span><br>
      <span class="star">☆</span> А вот я был на прошлом матче. Я туда привёз два кальяна, ещё третий был кальян у тренера. <span class="esp">Y pues estuve en el partido pasado. Llegué con/Llevé (=en el carro) dos cachimbas, y había tres en total con el del entrenador.</span>`,
      inflection: `<span class="aspect">несов:</span> привоз<span class="stress">и</span>ть <span class="aspect">сов:</span> привезт<span class="stress">и</span>`,
      russianImages: [
      'https://img.freepik.com/premium-photo/hookah-with-fume-on-dark_392895-21378.jpg',
      'https://'
      ],
      russianLinks: [
      { char: 'привезти', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B7%D1%82%D0%B8' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `在... 里
      在 means more closely "at" without specifying if it's inside, under, above, or to a side. That's why 里 is added to mean "inside". When there's no verb in the sentence, 在 functions as a verb, hence it cannot be omitted. For example, 他在屋子里 <span class="pinyin">tā zài wūzi lǐ</span> <span class="esp">He's in the room.</span><br>
      在 can be omitted when you say where a thing takes place at the beginning of a sentence. For example, 屋里有一个人 <span class="esp">Dentro de la habitación hay un hombre.</span><br>
      (🧧 Also note how 屋 goes alone without 子, keeping the same meaning: room. Natives often drop 子 when 屋 is used as a location and when it's followed by 里.)<br>
      Anyway, keeping 在 will always be right.<br>
      里 is not used when talking about place names, like cities. For example, 他在北京工作 <span class="pinyin">tā zài běijīng gōngzuò</span> <span class="esp">He's working in Beijing.</span><br>
      NOTE: To say "He's there", both 他在那 and 他在那里 are correct.<br>
      A rule of thumb is if the location is already a place (city, room, bar, forest, etc.), 里 is optional. But if the location is an object (water, box, video, etc.), 里 is needed.`,
      handwritten: `在... 里`,
      traditional: `在... 裏`,
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `非常<br>
      <span class="pinyin">fēicháng</span><br>
      <span class="esp">mucho, muchísimo, extremadamente</span><br><br>
      Compared to 很, it's stronger and may feel a bit formal, but can come up in conversation. It can also be repeated "非常非常" in a sentence, whereas 很 cannot be repeated.<br>
      <span class="circle-word">立</span> 他现在非常非常有钱 <span class="pinyin">tā xiànzài fēicháng fēicháng yǒu qián</span> <span class="esp">Él ya está tapado en plata.</span> <span class="circle-word">净</span> —好吃吗? —非常好吃 <span class="esp">—Está rico? —Uff, riquísimo.</span> <span class="circle-word">典</span> 我非常喜欢这本书 <span class="pinyin">wǒ fēicháng xǐhuān zhè běn shū</span> <span class="esp">Adoro este libro.</span>`,
      handwritten: `非常`,
      traditional: `非常`,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `My most adventurous trip, or <u>up there in the top three</u> was Tajikistan.`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">everything in due time; all in good time</span> ☜ <span class="esp">todo a su tiempo</span><br>`,
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: `<span class="title">flood out</span> ☜ <span class="esp">huir por culpa de la inundación; salir en masa; inundar (figurativo)</span><br>`,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `в чём смысл...? <span class="esp">Cuál es el sentido (de)...? / De qué sirve...?</span>`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `не зр<span class="stress">я</span> <span class="esp">no en vano, no es de extrañar que, no perder la (ida/llevada/cualquier acción), servir (hacer algo), y (lo dijo/hizo) con buena razón</span><br>
      <span class="star">☆</span> Я привёз кальян, ещё другой был кальян у ведущего. Не зря, короче, привёз. Думал, зря привезу, там же ещё они с детьми приехали. <span class="esp">Llegué con una cachimba, y había otra que era del anfitrión. Al final no perdí la traída (de la cachimba). Pero pensé, voy a perder la traída, igual vienen con niños.</span> <span class="star">☦</span> Пусть это будет не зря. <span class="esp">Qué no sea en vano.</span> <span class="star">☆</span> Всё не зря. <span class="esp">Todo sirve/Valió(Vale) la pena.</span> <span class="star">☦</span> Не зря говорят «утро вечера мудрен<span class="stress">е</span>е» <span class="esp">Con razón/No en vano/Por algo/Bien dicen "mañana lo ves con más calma".</span> <span class="star">☆</span> Не тратьте время зря. <span class="esp">No pierda (el) tiempo.</span> <span class="star">☦</span> Не зря ждал. <span class="esp">No perdí la espera/Sirvió esperar.</span> <span class="star">☆</span> Не зря тебе говорил. <span class="esp">Por algo se lo dije.</span><br><br>
      <span class="sickle">☭</span> The opposite, "зря", is also common. <span class="star">☆</span> [context: someone sends a video and asks if they watched it] —Посмотрел видео? —Нет. —Очень зря. <span class="esp">—Mal.</span> <span class="or">or</span> <span class="esp">Usted se lo pierde.</span> <span class="star">☦</span> Зря ты не пришёл/посмотрел/и т.д. <span class="esp">Qué pesar que no viniste/lo viste.</span> (but it better expresses the idea of missing out on something, probably a better translation could be "se perdió la fiesta/experiencia/etc.") <span class="star">☆</span> Зря ты беспокоишься. <span class="esp">Haces mal en preocuparte/Te preocupas demasiado/Te preocupas por nada.</span> <span class="star">☦</span> Зря ты пришла. <span class="esp">No debiste haber venido/Hiciste mal en venir.</span> <span class="star">☆</span> Зря я это сделал. <span class="esp">No debí haber dicho eso</span> (=regret) <span class="or">or</span> <span class="esp">Hice eso para nada.</span> (=wasted effort)`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `现在<br>
      xiànzài<br>
      <span class="esp">ahora, ya (en este momento)</span><br><br>
      <span class="circle-word">般</span> 我现在很忙 <span class="pinyin">wǒ xiànzài hěn máng<span> <span class="esp">Estoy ocupado ahorita mismo</span> <span class="circle-word">竹</span> 现在这里有很多人 <span class="pinyin">xiànzài zhèlǐ yǒu hěnduō rén</span> <span class="esp">Ya hay bastante gente aquí.</span>`,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `нел<span class="stress">о</span>вко <span class="esp">incómodo; vergüenza, pena</span><br>
      <span class="star">☆</span> Я думал, блин, сейчас неловко будут себя чувствовать. <span class="esp">Y pensé, "juemadre, ahora todos se van a sentir incómodos".</span> <span class="star">☦</span> Неловко в<span class="stress">ы</span>шло. <span class="esp">Eso fue incómodo/Qué pena.</span> <span class="star">☆</span> Хватит делать это! Это реально неловко! Мне за тебя реально стыдно. <span class="esp">Deje de hacer eso! Qué pena! Me hace dar pena.</span> <span class="star">☦</span> Мне было неловко отказывать. <span class="esp">Me daba pena decir que no.</span><br><br>
      <span class="sickle">☭</span> According to a Redditor, неловко is for casual things, and стыдно for nudity, body cases, and more serious things.`,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `достав<span class="stress">а</span>ть <span class="esp">sacar; conseguir; alcanzar (un lugar a cierta distancia)</span><br>
      <span class="star">☆</span> Я когда начал кальяны доставать... <span class="esp">Cuando empecé a sacar las cachimbas...</span> <span class="star">☦</span> Достать билет в театр. <span class="esp">Conseguir un entrada al teatro.</span> <span class="star">☆</span> Достать рукой до потолк<span class="stress">а</span> (м. потол<span class="stress">о</span>к). <span class="esp">Alcanzar el techo con la mano.</span>`,
      inflection: `<span class="aspect">несов:</span> достав<span class="stress">а</span>ть <span class="aspect">сов:</span> дост<span class="stress">а</span>ть`,
      russianLinks: [
      { char: 'доставать', url: 'https://ru.wiktionary.org/wiki/%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B0%D1%82%D1%8C' },
      ],
    },
    {
      chinese: ``,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: `почувствовать на себе <span class="esp">sentir en carne propia, sentir (sobre uno mismo algo), experimentar</span><br>
      Apparently, the most common way it is used is with взгляд.<br>
      <span class="star">☆</span> Я когда начал кальяны доставать, почувствовал на себе кос<span class="stress">ы</span>е взгляды. <span class="esp">Cuando empecé a sacar las cachimbas, sentía que me miraban de reojo.</span> <span class="star">☦</span> Правда ли то, что можно почувствовать не себе чужой взгляд? <span class="esp">Será verdad que uno puede sentir cuando alguien lo mira a uno?</span> <span class="star">☆</span> В будущем они молодёжь будет чувствовать на себе последствия изменения климата. <span class="esp">En el futuro los jóvenes van a sentir en carne propia las consecuencias del cambio climático.</span> `,
      inflection: `<span class="aspect">несов:</span> чувствовать <span class="aspect">сов:</span> почувствовать`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'чувствовать', url: 'https://ru.wiktionary.org/wiki/%D1%87%D1%83%D0%B2%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D1%82%D1%8C' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `经常 | 常 | 常常<br>
      <span class="pinyin">jīngcháng | cháng | chángcháng<pan><br>
      <span class="esp">con frecuencia, a menudo, bastante</span><br><br>
      <span class="gold">常常</span> seems to be less common than just one 常, as the latter is enough and correct. To form the negative of 常常 is 不常. <span class="circle-word">曹</span> 然后她常常说的一句话是... <span class="pinyin">ránhòu tā chángcháng shuō de yī jù huà shì</span> <span class="esp">Y algo que él repetía era...</span> <span class="or">or</span> <span class="esp">...que decía bastante era...</span> <span class="unpack">⟨WHERE</span> 句 measure for sentences/lines<span class="unpack">⟩</span> <span class="circle-word">桥</span> 我不常那里 <span class="pinyin">wǒ bù cháng nàli</span> <span class="esp">No voy allá con frecuencia.</span><br><br>
      <span class="gold">经常</span> is used more often in daily life, apparently, although this may not be sctrictly right. My thought is all three are used. It's also the adjective "common". <span class="circle-word">忠</span> 我经常乘巴士回家 <span class="pinyin">wǒ jīngcháng chéng bāshì huíjiā</span> <span class="esp">Normalmente me devuelvo para la casa en bus.</span> <span class="unpack">⟨WHERE</span> 乘 ride; 巴士 bus<span class="unpack">⟩</span> <span class="circle-word">禅</span> 在这个城市, 堵车是很经常的 <span class="pinyin">zài zhège chéngshì, dǔchē shì hěn jīngcháng de</span> <span class="esp">Los trancones son bastantes/comúnes en esta ciudad.</span>`,
      handwritten: `经常 | 常 | 常常`,
      traditional: `經常 | 常 | 常常`,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `很棒!<br>
      <span class="pinyin">hěn bàng</span><br>
      <span class="esp">muy bien/bueno, excelente, increíble, fantástico</span><br><br>
      <span class="gold">棒</span> or 很棒 is the go-to praise word for most daily conversations. It's the equivalent of "great/awesome". <span class="circle-word">灵</span> 然后觉得 "很棒!" <span class="esp">Y entonces pensé, "bieeen!"</span> <span class="circle-word">空</span> 你很棒 <span class="esp">Ud. es el mejor</span> <span class="circle-word">彩</span> 你的中文很棒 <span class="esp">Su chino es muuy bueno.</span> <span class="circle-word">圆</span> 做得很棒 <span class="pinyin">zuò de hěn bàng</span> <span class="esp">Lo hizo genial.</span>`,
      handwritten: `很棒`,
      traditional: `很棒`,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
    {
      chinese: `记得<br>
      <span class="pinyin">jìde</span><br>
      <span class="esp">recordar, acordarse</span><br><br>
      <span class="circle-word">流</span> 我记得我也认识一个人 <span class="pinyin">wǒ jìde wǒ yě rènshí yī gè rén</span> <span class="esp">Yo me acuerdo conocer/ver a alguien [así] también.</span> <span class="unpack">⟨WHERE</span> 记得 remember; 认识 know/recognize/be familiar with<span class="unpack">⟩</span> <span class="circle-word">严</span> 我记得这是我出生的地方 <span class="pinyin">wǒ jìde zhè shì wǒ chūshēng de dìfang</span> <span class="esp">Me acuerdo que aquí fue donde nací.</span>`,
      handwritten: ``,
      traditional: ``,
      strokeOrderImages: [
      'https://',
      'https://'
      ],
      links: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      english: ``,
      englishImages: [
      'https://',
      'https://'
      ],
      englishLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
      russian: ``,
      inflection: `<span class="aspect">несов:</span> X <span class="aspect">сов:</span> X`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: ' ', url: 'https://' },
      { char: ' ', url: 'https://' },
      ],
    },
  ];

  // ---------- state ----------
  let cards = [];
  let currentIndex = 0;
  let searchMode = false;
  let searchResults = [];
  let searchResultsIndex = 0;

  // DOM refs
  const viewport = document.getElementById('cardViewport');
  const counterDisplay = document.getElementById('counterDisplay');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchArea = document.getElementById('searchArea');
  const searchInput = document.getElementById('searchInput');
  const searchResultsBox = document.getElementById('searchResultsBox');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const backFromSearchBtn = document.getElementById('backFromSearchBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');

  // ---------- Language Toggle ----------
  let currentLangMode = 'all'; // 'all', 'zh', 'en', 'ru'

  function updateLangToggle() {
    const labels = {
      'all': '🌐 All',
      'zh': '🏯 中文',
      'en': '🗽 English',
      'ru': '🪆 Русский'
    };
  
    // Make sure the button exists
    if (langToggleBtn) {
      langToggleBtn.textContent = labels[currentLangMode] || '🌐 All';
    } else {
      console.warn('Language toggle button not found');
    }
  }

  function toggleLanguageMode() {
    const modes = ['all', 'zh', 'en', 'ru'];
    const currentModeIndex = modes.indexOf(currentLangMode);
    const nextIndex = (currentModeIndex + 1) % modes.length;
    currentLangMode = modes[nextIndex];
  
    // Update the button text
    updateLangToggle();
  
    // Find the next valid card for the selected language
    findNextValidCard(currentIndex);
  }

  function hasLanguageContent(note, mode) {
    if (!note) return false;
    if (mode === 'all') return true;
    if (mode === 'zh') return note.chinese && note.chinese.trim() !== '';
    if (mode === 'en') return note.english && note.english.trim() !== '';
    if (mode === 'ru') return note.russian && note.russian.trim() !== '';
    return false;
  }

  function findNextValidCard(startIndex) {
    if (cards.length === 0) return;
  
    let index = startIndex;
    let attempts = 0;
  
    // If in 'all' mode, just use the current index
    if (currentLangMode === 'all') {
      currentIndex = index;
      updateView();
      return;
    }
  
    // Find the next card that has content in the selected language
    while (attempts < cards.length) {
      const note = cards[index];
      if (hasLanguageContent(note, currentLangMode)) {
        currentIndex = index;
        updateView();
        return;
      }
      index = (index + 1) % cards.length;
      attempts++;
    }
  
    // If no card has content in the selected language, show a message
    currentIndex = 0;
    renderEmptyState(currentLangMode);
  }

  function renderEmptyState(mode) {
    const langNames = {
      'zh': '中文',
      'en': 'English',
      'ru': 'Русский'
    };
    viewport.innerHTML = `
      <div style="color:#9bb0cc; text-align:center; padding:40px 10px; width:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%;">
        <span style="font-size: 48px; margin-bottom: 16px;">📭</span>
        <span style="font-size: 18px; margin-bottom: 8px;">No cards with ${langNames[mode] || mode} content</span>
        <span style="font-size: 14px; opacity: 0.6;">Add some content or switch to another language</span>
      </div>
    `;
    counterDisplay.textContent = '0 / 0';
    backFromSearchBtn.style.display = 'none';
  }

  function applyLanguageMode(mode) {
    const zhBlock = document.querySelector('.block-zh');
    const enBlock = document.querySelector('.block-en');
    const ruBlock = document.querySelector('.block-ru');
  
    if (!zhBlock || !enBlock || !ruBlock) return;
  
    // Show all first
    zhBlock.classList.remove('hidden');
    enBlock.classList.remove('hidden');
    ruBlock.classList.remove('hidden');
  
    if (mode === 'all') {
      return;
    }
  
    //  For single language modes, hide other blocks
    if (mode === 'zh') {
      enBlock.classList.add('hidden');
      ruBlock.classList.add('hidden');
    } else if (mode === 'en') {
      zhBlock.classList.add('hidden');
      ruBlock.classList.add('hidden');
    } else if (mode === 'ru') {
      zhBlock.classList.add('hidden');
      enBlock.classList.add('hidden');
    }
  }

  // ---------- helpers ----------
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // New function to format Russian text with collapsible content
  function formatRussianText(text, inflection, russianLinks) {
  if (!text) return '';
  
  const lines = text.split('\n');
  if (lines.length === 0) return text;
  
  const firstLine = lines[0];
  const restOfText = lines.slice(1).join('\n');
  
  let html = `<div class="collapsible-trigger" onclick="toggleCollapsible(this)">${firstLine}</div>`;
  
  html += `<div class="collapsible-content">`;

  if (inflection && inflection.trim()) {
    const handLines = inflection.split('\n');
    html += `<div class="inflection-text">${handLines.join('<br>')}</div>`;
  }
  
  if (russianLinks && Array.isArray(russianLinks) && russianLinks.length > 0) {
    html += `<div class="links-container-en-ru">`;
    russianLinks.forEach((link) => {
      html += `
        <span class="link-item">
          <a href="${link.url}" target="_blank" class="char-link">${link.char}</a>
        </span>
      `;
    });
    html += `</div>`;
  }
  
  html += `</div>`;
  
  if (restOfText) {
    html += `<br>${restOfText}`;
  }
  
  return html;
}

  function formatRussianImages(russianImages) {
    if (!russianImages || !Array.isArray(russianImages) || russianImages.length === 0) return '';
  
    let html = `<div class="stroke-order-container">`;
    russianImages.forEach((imgUrl, index) => {
      html += `
        <div class="russian-image-item">
          <img src="${imgUrl}" alt="Russian image ${index + 1}" loading="lazy" onerror="this.style.display='none'">
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  // New function to format English text with images and links (non-collapsible)
  function formatEnglishText(text, englishImages, englishLinks) {
    if (!text) return '';
    
    let html = text;
    
    // Add English images (non-collapsible)
    if (englishImages && Array.isArray(englishImages) && englishImages.length > 0) {
      html += `<div class="stroke-order-container">`;
      englishImages.forEach((imgUrl, index) => {
        html += `
          <div class="english-image-item">
            <img src="${imgUrl}" alt="English image ${index + 1}" loading="lazy" onerror="this.style.display='none'">
          </div>
        `;
      });
      html += `</div>`;
    }
    
    // Add English links (non-collapsible)
    if (englishLinks && Array.isArray(englishLinks) && englishLinks.length > 0) {
      html += `<div class="english-links-container">`;
      englishLinks.forEach((link) => {
        html += `
          <span class="link-item">
            <a href="${link.url}" target="_blank" class="char-link">${link.char}</a>
          </span>
        `;
      });
      html += `</div>`;
    }
    
    return html;
  }

  function renderCard(note) {
    // Function to format Chinese text with collapsible Traditional section
    function formatChineseText(text, traditional, handwritten, strokeImages, links) {
      // Split the text by lines
      const lines = text.split('\n');
      if (lines.length === 0) return text;
  
      // First line is the trigger
      const firstLine = lines[0];
      const restOfText = lines.slice(1).join('\n');
  
      // Build the HTML with collapsible content
      let html = `<div class="collapsible-trigger" onclick="toggleCollapsible(this)">${firstLine}</div>`;
  
      // Add the collapsible content
      html += `<div class="collapsible-content">`;
  
      // Handwritten version (NEW - appears first)
      if (handwritten && handwritten.trim()) {
        const handLines = handwritten.split('\n');
        html += `<div class="handwritten-text">${handLines.join('<br>')}</div>`;
      }
  
      // Traditional characters (appears second) (Chinese)
      if (traditional && traditional.trim()) {
        const tradLines = traditional.split('\n');
        html += `<div class="traditional-text">${tradLines.join('<br>')}</div>`;
      }
  
      // Multiple stroke order images (Chinese)
     if (strokeImages && Array.isArray(strokeImages) && strokeImages.length > 0) {
        html += `<div class="stroke-order-container">`;
        strokeImages.forEach((imgUrl, index) => {
          html += `
            <div class="stroke-order-item">
              <img src="${imgUrl}" alt="Stroke order ${index + 1}" loading="lazy" onerror="this.style.display='none'">
            </div>
          `;
        });
        html += `</div>`;
      }
  
      // 🔗 LINKS SECTION (Chinese)
      if (links && Array.isArray(links) && links.length > 0) {
        html += `<div class="links-container">`;
        links.forEach((link) => {
          html += `
            <span class="link-item">
            <a href="${link.url}" target="_blank" class="char-link">${link.char}</a>
            </span>
          `;
        });
        html += `</div>`;
      }
  
      html += `</div>`;
  
      // Add the rest of the text after the collapsible section
      if (restOfText) {
        html += `<br>${restOfText}`;
      }
  
      return html;
    }

    // Format the Chinese text with collapsible section
    const chineseHtml = formatChineseText(
      note.chinese, 
      note.traditional,
      note.handwritten || '',
      note.strokeOrderImages || [],
      note.links || []
    );

    // Format the Russian text with collapsible content (no images inside)
    const russianHtml = formatRussianText(
      note.russian || '',
      note.inflection || '',
      note.russianLinks || []
    );

    // Russian images (non-collapsible, shown at the end)
    const russianImagesHtml = formatRussianImages(note.russianImages || []);

    // Format the English text with images and links (non-collapsible)
    const englishHtml = formatEnglishText(
      note.english || '',
      note.englishImages || [],
      note.englishLinks || []
    );

    const imgHtml = note.img ? `<img src="${note.img}" alt="illustration" loading="lazy">` : '';

    viewport.innerHTML = `
      <div class="block block-zh">
        <div class="block-label">中文</div>
        <div class="block-content">${chineseHtml} ${imgHtml}</div>
      </div>
      <div class="block block-en">
        <div class="block-label">English</div>
        <div class="block-content">${englishHtml}</div>
      </div>
      <div class="block block-ru">
        <div class="block-label">Русский</div>
        <div class="block-content">${russianHtml}${russianImagesHtml}</div>
      </div>
    `;
    
    // Apply the current language mode after rendering
    applyLanguageMode(currentLangMode);
  }

  function updateView() {
    if (searchMode && searchResults.length > 0) {
      const note = searchResults[searchResultsIndex];
      renderCard(note);
      counterDisplay.textContent = `${searchResultsIndex + 1} / ${searchResults.length}`;
      backFromSearchBtn.style.display = 'inline-flex';
      return;
    }
  
    if (cards.length === 0) {
      viewport.innerHTML = `<div style="color:#9bb0cc; text-align:center; padding:40px 10px; width:100%;">No cards. Add some data.</div>`;
      counterDisplay.textContent = '0 / 0';
      backFromSearchBtn.style.display = 'none';
      return;
    }
  
    // Check if current card has content in selected language
    if (currentLangMode !== 'all' && !hasLanguageContent(cards[currentIndex], currentLangMode)) {
      // Try to find the next card with content
      let found = false;
      for (let i = 0; i < cards.length; i++) {
        if (hasLanguageContent(cards[i], currentLangMode)) {
          currentIndex = i;
          found = true;
          break;
        }
      }
      if (!found) {
        renderEmptyState(currentLangMode);
        return;
      }
    }
  
    localStorage.setItem('currentCardIndex', currentIndex.toString());
    if (currentIndex >= cards.length) currentIndex = 0;
    const note = cards[currentIndex];
    renderCard(note);
    counterDisplay.textContent = `${currentIndex + 1} / ${cards.length}`;
    backFromSearchBtn.style.display = 'none';
  }

  function exitSearchMode() {
    searchMode = false;
    searchResults = [];
    searchResultsIndex = 0;
    searchArea.classList.remove('active');
    searchResultsBox.classList.remove('active');
    searchResultsBox.innerHTML = '';
    searchInput.value = '';
    backFromSearchBtn.style.display = 'none';
    if (cards.length > 0 && currentIndex < cards.length) {
      renderCard(cards[currentIndex]);
      counterDisplay.textContent = `${currentIndex + 1} / ${cards.length}`;
    } else {
      updateView();
    }
  }

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (q === '') {
      searchResultsBox.classList.remove('active');
      searchResults = [];
      return;
    }

    const results = notes.filter(note => {
      const inChinese = note.chinese.toLowerCase().includes(q);
      const inEnglish = note.english.toLowerCase().includes(q);
      const inRussian = note.russian.toLowerCase().includes(q);
      return inChinese || inEnglish || inRussian;
    });

    searchResults = results;
    if (results.length === 0) {
      searchResultsBox.innerHTML = `
        <div class="result-item" style="color:#8b9bb0; justify-content:center; border-left-color: transparent;">
          <span style="opacity:0.6;">🔍 No matches found</span>
        </div>
      `;
      searchResultsBox.classList.add('active');
      return;
    }

    let html = '';
    results.forEach((note, idx) => {
      // Find which language matched and get the matching text snippet
      const matches = [];
      let matchText = '';
    
      if (note.chinese.toLowerCase().includes(q)) {
        matches.push({ lang: '中文', flag: '', text: note.chinese });
        matchText = note.chinese;
      }
      if (note.english.toLowerCase().includes(q)) {
        matches.push({ lang: 'English', flag: '', text: note.english });
        if (!matchText) matchText = note.english;
      }
      if (note.russian.toLowerCase().includes(q)) {
        matches.push({ lang: 'Русский', flag: '', text: note.russian });
       if (!matchText) matchText = note.russian;
      }
    
      // Highlight the matching text
      const highlightedText = matchText.replace(
        new RegExp(q, 'gi'), 
        (match) => `<span style="background: rgba(107, 140, 255, 0.3); padding: 1px 4px; border-radius: 4px; color: #6b8cff; font-weight: 600;">${match}</span>`
      );
    
      const matchTags = matches.map(m => 
        `<span class="result-lang-tag">${m.flag} ${m.lang}</span>`
      ).join('');
    
      html += `
        <div class="result-item" data-index="${idx}">
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 500; margin-bottom: 4px;">${highlightedText}</div>
            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
              ${matchTags}
            </div>
          </div>
          <div style="flex-shrink: 0; margin-left: 12px;">
            <span class="result-match">${matches.length} match${matches.length > 1 ? 'es' : ''}</span>
          </div>
        </div>
      `;
    });
  
    searchResultsBox.innerHTML = html;
    searchResultsBox.classList.add('active');

    searchResultsBox.querySelectorAll('.result-item').forEach(el => {
      el.addEventListener('click', function(e) {
        const idx = parseInt(this.dataset.index, 10);
        if (!isNaN(idx) && idx < searchResults.length) {
          searchResultsIndex = idx;
          searchMode = true;
          renderCard(searchResults[idx]);
          counterDisplay.textContent = `${idx + 1} / ${searchResults.length}`;
          backFromSearchBtn.style.display = 'inline-flex';
          searchResultsBox.classList.remove('active');
          searchArea.classList.remove('active');
        }
      });
    });
  }

  // ---------- event listeners ----------
  shuffleBtn.addEventListener('click', function() {
    if (searchMode) exitSearchMode();
    if (cards.length > 1) {
      shuffleArray(cards);
      currentIndex = 0;
    
      // If not in 'all' mode, find first card with content
      if (currentLangMode !== 'all') {
        let found = false;
        for (let i = 0; i < cards.length; i++) {
          if (hasLanguageContent(cards[i], currentLangMode)) {
            currentIndex = i;
          found = true;
            break;
          }
        }
        if (!found) {
          renderEmptyState(currentLangMode);
          return;
        }
      }
      updateView();
    }
  });

  prevBtn.addEventListener('click', function() {
    if (searchMode && searchResults.length > 0) {
      searchResultsIndex = (searchResultsIndex - 1 + searchResults.length) % searchResults.length;
      renderCard(searchResults[searchResultsIndex]);
      counterDisplay.textContent = `${searchResultsIndex + 1} / ${searchResults.length}`;
      return;
    }
    if (cards.length === 0) return;
  
    // Find previous card with content in the current language
    let newIndex = currentIndex;
    let attempts = 0;
  
    do {
      newIndex = (newIndex - 1 + cards.length) % cards.length;
      attempts++;
    } while (attempts < cards.length && 
              !hasLanguageContent(cards[newIndex], currentLangMode) && 
              currentLangMode !== 'all');
  
    if (hasLanguageContent(cards[newIndex], currentLangMode) || currentLangMode === 'all') {
      currentIndex = newIndex;
      updateView();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (searchMode && searchResults.length > 0) {
      searchResultsIndex = (searchResultsIndex + 1) % searchResults.length;
      renderCard(searchResults[searchResultsIndex]);
      counterDisplay.textContent = `${searchResultsIndex + 1} / ${searchResults.length}`;
      return;
    }
    if (cards.length === 0) return;
  
    // Find next card with content in the current language
    let newIndex = currentIndex;
    let attempts = 0;
  
    do {
      newIndex = (newIndex + 1) % cards.length;
      attempts++;
    } while (attempts < cards.length && 
            !hasLanguageContent(cards[newIndex], currentLangMode) && 
            currentLangMode !== 'all');
  
    if (hasLanguageContent(cards[newIndex], currentLangMode) || currentLangMode === 'all') {
      currentIndex = newIndex;
      updateView();
    }
  });

  searchToggleBtn.addEventListener('click', function() {
    const isActive = searchArea.classList.contains('active');
    if (isActive) {
      exitSearchMode();
    } else {
      searchArea.classList.add('active');
      searchInput.focus();
      if (!searchMode) {
        searchResultsBox.classList.remove('active');
        searchResultsBox.innerHTML = '';
        searchInput.value = '';
      }
    }
  });

  searchInput.addEventListener('input', function() {
    const query = this.value;
    if (query.trim() === '') {
      searchResultsBox.classList.remove('active');
      searchResults = [];
      return;
    }
    performSearch(query);
  });

  searchClearBtn.addEventListener('click', function() {
    searchInput.value = '';
    searchResultsBox.classList.remove('active');
    searchResults = [];
    searchInput.focus();
    if (!searchMode) updateView();
  });

  backFromSearchBtn.addEventListener('click', function() {
    exitSearchMode();
    if (cards.length > 0 && currentIndex < cards.length) {
      renderCard(cards[currentIndex]);
      counterDisplay.textContent = `${currentIndex + 1} / ${cards.length}`;
    } else {
      updateView();
    }
  });

  // Language toggle event listener
  langToggleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleLanguageMode();
  });

  // ---------- init ----------
  function init() {
    cards = [...notes];
  
    // Try to get saved index from localStorage
    const savedIndex = localStorage.getItem('currentCardIndex');
  
    if (savedIndex !== null && parseInt(savedIndex) < cards.length) {
      currentIndex = parseInt(savedIndex);
    } else {
      currentIndex = 0;
    }
  
    // shuffleArray(cards);
    searchMode = false;
    backFromSearchBtn.style.display = 'none';
  
    // Initialize language toggle
    currentLangMode = 'all';
    updateLangToggle();
  
    // Make sure we start on a valid card
    if (cards.length > 0 && !hasLanguageContent(cards[currentIndex], currentLangMode)) {
      findNextValidCard(currentIndex);
    } else {
      updateView();
    }
  }

  init();
})();

// Update the toggle function to support both click and touch
function toggleCollapsible(element) {
  element.classList.toggle('active');
  const content = element.nextElementSibling;
  if (content && content.classList.contains('collapsible-content')) {
    content.classList.toggle('open');
  }
}

// Add touch event support
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.collapsible-trigger').forEach(el => {
    el.addEventListener('touchstart', function(e) {
      // Prevent double-tap zoom on mobile
      e.preventDefault();
      toggleCollapsible(this);
    });
  });
});
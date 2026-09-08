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
      <span class="aspect">несов:</span> выраж<span class="stress">а</span>ться
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
      russian: `скрывать (ocultar)
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
      🧧 儿 is generally northern accent, not used in Taiwan besides with its meaning "child/son". The 儿 drops the last consonant sound of the word that preceeds it. So 点 <span class="pinyin">diǎn</span> in 快点儿 becomes <span class="pinyin">diǎr</span>. Here are very frequent ones: 一点儿 a bit; 没事儿 it's nothing/nevermind; 这儿 here; 那儿 there; 哪儿 whre?/anywhere/wherever; 一会儿 a moment (a Redditor says he's never heard this one said without the 儿); 好玩儿 fun; 羊肉串儿 lamb kebab; 冰块儿 ice cube; 吸管儿 straw. To write "wait a moment", use the 儿 -> 等一会儿.`,
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
      <span class="star">☆</span> Веди себя хорошо, а то попадёшь в тюрьму.<span class="esp"> Pórtese bien, o si no, se va a la cárcel.</span> <span class="star">☦</span> Я сказала ему, что з<span class="stress">а</span>мужем, а то ведь не остал бы.<span class="esp"> Le dije que estaba casada, porque es que o si no, no me dejaba (en paz), pues.</span> <span class="unpack">⟨WHERE</span>  ведь adds that "pues" flavor in the sense of "as we both know", like "it's obvious".<span class="unpack">⟩</span> <span class="star">☆</span> Спеши/Потороп<span class="stress">и</span>сь, а то опоздаем.<span class="esp"> Córrale porque o si no, nos coge la tarde.</span><br><br>
      <span class="sickle">☭</span> а то is used colloquially to mean "hell yeah / claro, obvio" <span class="star">☆</span> —Пойдёшь? —А то, конечно пойду<span class="esp"> —Viene? —Obvio que voy!</span>`,
      inflection: `<span class="aspect">несов:</span> попад<span class="stress">а</span>ть <span class="aspect">сов:</span> поп<span class="stress">а</span>сть`,
      russianImages: [
      'https://',
      'https://'
      ],
      russianLinks: [
      { char: 'попадать', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C' },
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
      chinese: `疫情的关系大家都减薪，这是大事，你可需要去跟每一个人解释清楚`,
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
      inflection: `<span class="aspect">несов:</span> вторг<span class="stress">а</span>ться <span class="aspect">сов:</span> вторгнуться
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
      <span class="sickle">☭</span> "Влиять" может использоваться в различных контекстах - позитивном, негативном или нейтральном. "Сказываться на чём-то" часто употребляется в негативном смысле. <span class="star">☆</span> Пьяснтво сказывается на здоровье.<span class="esp"> Beber afecta a tu salud.</span>`,
      inflection: `<span class="aspect">несов:</span> влиять <span class="aspect">сов:</span> повлиять`,
      russianLinks: [
      { char: 'влиять', url: 'https://ru.wiktionary.org/wiki/%D0%B2%D0%BB%D0%B8%D1%8F%D1%82%D1%8C' },
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
      <span class="aspect">несов:</span> пить <span class="aspect">сов:</span> в<span class="stress">ы</span>пить`,
      russianLinks: [
      { char: 'сидеть', url: 'https://ru.wiktionary.org/wiki/%D1%81%D0%B8%D0%B4%D0%B5%D1%82%D1%8C' },
      { char: 'пить', url: 'https://ru.wiktionary.org/wiki/%D0%BF%D0%B8%D1%82%D1%8C' },
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
  function formatRussianText(text, inflection, russianImages, russianLinks) {
    if (!text) return '';
    
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
      if (inflection && inflection.trim()) {
        const handLines = inflection.split('\n');
        html += `<div class="inflection-text">${handLines.join('<br>')}</div>`;
      }
    
    // Russian images
    if (russianImages && Array.isArray(russianImages) && russianImages.length > 0) {
      html += `<div class="stroke-order-container">`;
      russianImages.forEach((imgUrl, index) => {
        html += `
          <div class="stroke-order-item">
            <img src="${imgUrl}" alt="Russian image ${index + 1}" loading="lazy" onerror="this.style.display='none'">
          </div>
        `;
      });
      html += `</div>`;
    }
    
    // Russian links
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
    
    // Add the rest of the text after the collapsible section
    if (restOfText) {
      html += `<br>${restOfText}`;
    }
    
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

    // Format the Russian text with collapsible content
    const russianHtml = formatRussianText(
      note.russian || '',
      note.inflection || '',
      note.russianImages || [],
      note.russianLinks || []
    );

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
        <div class="block-content">${russianHtml}</div>
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
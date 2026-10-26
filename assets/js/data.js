/*
 * All text and media for the four topic pages (define, when, adverse, how).
 * Every text has three languages: english, hindi, gujrati (the same keys as the
 * .english / .hindi / .gujrati classes the language switch toggles).
 *
 * title    - heading in the title bar
 * label    - short two-line name shown in the side number button when it expands
 * slides   - one entry per video: file name inside videoDir, optional poster, caption (content)
 * watchVideo - path of the video the WATCH VIDEO button plays in the pop-up player (define and how only)
 * endLink  - optional { href, label }: on the last slide the next arrow is replaced by an arrow (arowAsset.png)
 *            carrying that label, which links to href (used by how.html to open pranam.html)
 *
 * DRAFT: the captions for the when / adverse / how pages and every Hindi and
 * Gujarati line were written from what the videos show and have not been
 * reviewed by a teacher or translator. Edit them here, nowhere else.
 */
window.JEALOUSY_DATA = {
  order: ["define", "when", "adverse", "how"],

  pages: {
    define: {
      file: "define.html",
      watchVideo: "assets/videos/1.mp4",
      videoDir: "assets/videos/1/",
      title: {
        english: "1. What is Jealousy ?",
        hindi: "1. ईर्ष्या क्या है ?",
        gujrati: "1. ઈર્ષ્યા એટલે શું ?",
      },
      label: {
        english: "What is<br>Jealousy ?",
        hindi: "ईर्ष्या<br>क्या है ?",
        gujrati: "ઈર્ષ્યા<br>એટલે શું ?",
      },
      slides: [
        {
          video: "1.mp4",
          poster: "assets/images/define/1.png",
          content: {
            english:
              "Jealousy is the feeling of sadness upon seeing another’s happiness",
            hindi: "ईर्ष्या मतलब दूसरों की खुशी देखकर दुःखी होना",
            gujrati: "ઈર્ષ્યા એટલે બીજાની ખુશી જોઈને દુઃખી થવું",
          },
        },
        {
          video: "2.mp4",
          poster: "assets/images/define/2.png",
          content: {
            english:
              "Jealousy means having a feeling of anger or bitterness upon seeing another’s qualities or possessions.",
            hindi:
              "ईर्ष्या मतलब दूसरों के गुणों या संपत्ति को देखकर क्रोध या कड़वाहट की भावना होना",
            gujrati:
              "ઈર્ષ્યા એટલે અન્યના ગુણો અથવા સંપત્તિ જોઈને ગુસ્સો અથવા કડવાશની લાગણી થવી",
          },
        },
      ],
    },

    when: {
      file: "when.html",
      videoDir: "assets/videos/2/",
      title: {
        english: "2. When are we Jealous ?",
        hindi: "2. हमें ईर्ष्या कब होती है ?",
        gujrati: "2. આપણને ઈર્ષ્યા ક્યારે થાય છે?",
      },
      label: {
        english: "When are we<br>Jealous ?",
        hindi: "हमें ईर्ष्या<br>कब होती है ?",
        gujrati: "આપણને ઈર્ષ્યા<br>ક્યારે થાય છે?",
      },
      slides: [
        {
          video: "1.mp4",
          content: {
            english:
              "When our friend gets a new toy or bigger toy than we have.",
            hindi: "जब हमारे दोस्त को नया खिलौना या हमसे बड़ा खिलौना मिलता है।",
            gujrati:
              "જ્યારે આપણા મિત્રને નવું અથવા આપણા કરતાં મોટું રમકડું મળે છે.",
          },
        },
        {
          video: "2.mp4",
          content: {
            english: "When our siblings get new clothes, stationery etc.",
            hindi: "जब हमारे भाई - बहन को नए कपड़े, स्टेशनरी आदि मिलते हैं।",
            gujrati:
              "જ્યારે આપણા ભાઈ - બહેનોને નવા કપડાં, સ્ટેશનરી વગેરે મળે છે.",
          },
        },
        {
          video: "3.mp4",
          content: {
            english: "When our siblings get more attention from our parents",
            hindi:
              "जब माता-पिता हमारे भाई-बहनों पर हमसे ज़्यादा ध्यान देते हैं।",
            gujrati:
              "જ્યારે માતા - પિતા આપણા કરતાં ભાઈ - બહેનો પર વધુ ધ્યાન આપે છે.",
          },
        },
        {
          video: "4.mp4",
          content: {
            english:
              "When our sibling gets a bigger portion of cake, chocolate etc.",
            hindi:
              "जब हमारे भाई - बहनों को केक, चॉकलेट आदि का बड़ा हिस्सा मिलता है।",
            gujrati:
              "જ્યારે આપણા ભાઈ - બહેનોને કેક, ચોકલેટ વગેરેનો મોટો ભાગ મળે છે.",
          },
        },
        {
          video: "5.mp4",
          content: {
            english: "When our friend gets more marks / grades than us",
            hindi: "जब हमारे दोस्त को हमसे ज्यादा अंक / ग्रेड्स मिलते हैं।",
            gujrati: "જ્યારે આપણા મિત્રને આપણા કરતાં વધુ ગુણ / ગ્રેડ મળે છે.",
          },
        },
        {
          video: "6.mp4",
          content: {
            english:
              "When our friend performs better than us in sports, games, competitions and other activities.",
            hindi:
              "जब हमारा दोस्त खेल, गेम्स, प्रतियोगिताओं और अन्य गतिविधियों में हमसे बेहतर प्रदर्शन करता है।",
            gujrati:
              "જ્યારે આપણો મિત્ર રમતગમત, રમતો, સ્પર્ધાઓ અને અન્ય પ્રવૃત્તિઓમાં આપણા કરતાં વધુ સારો દેખાવ કરે છે.",
          },
        },
        {
          video: "7.mp4",
          content: {
            english: "When our friend befriends someone we dislike",
            hindi: "जब हमारा दोस्त उससे दोस्ती कर ले जिसे हम पसंद नहीं करते।",
            gujrati:
              "જ્યારે આપણો મિત્ર આપણને નાપસંદ વ્યકિત સાથે મિત્રતા કરે છે.",
          },
        },
        {
          video: "8.mp4",
          content: {
            english:
              "When our sibling’s opinions or choices are valued more than ours.",
            hindi:
              "जब हमारे भाई - बहन की राय या पसंद को हमसे ज़्यादा महत्त्व दिया जाए।",
            gujrati:
              "જ્યારે આપણા ભાઈ - બહેનના અભિપ્રાય અથવા પસંદગીને આપણા કરતાં વધુ મહત્ત્વ આપવામાં આવે.",
          },
        },
        {
          video: "9.mp4",
          content: {
            english: "When our friend is praised more than us",
            hindi: "जब हमारे दोस्त की हमसे ज़्यादा प्रशंसा की जाए।",
            gujrati: "જ્યારે આપણા મિત્રની આપણા કરતાં વધુ પ્રશંસા કરવામાં આવે.",
          },
        },
        {
          video: "10.mp4",
          content: {
            english: "When our friend has more attractive things than us",
            hindi: "जब हमारे दोस्त के पास हमसे ज़्यादा आकर्षक चीज़ें हों",
            gujrati: "જ્યારે આપણા મિત્ર પાસે આપણા કરતાં વધુ આકર્ષક વસ્તુઓ હોય.",
          },
        },
        {
          video: "11.mp4",
          content: {
            english:
              "When someone celebrates their birthday in a grander way than we do",
            hindi: "जब कोई अपना जन्मदिन हमसे ज़्यादा धूमधाम से मनाता हो",
            gujrati:
              "જ્યારે કોઈ પોતાનો જન્મદિવસ આપણા કરતાં વધુ ધામધૂમથી ઉજવે છે.",
          },
        },
      ],
    },

    adverse: {
      file: "adverse.html",
      videoDir: "assets/videos/3/",
      title: {
        english: "3. Adverse effects of Jealousy",
        hindi: "3. ईर्ष्या का दुष्परिणाम",
        gujrati: "3. ઈર્ષ્યાના દુષ્પરિણામો",
      },
      label: {
        english: "Adverse effects<br>of Jealousy",
        hindi: "ईर्ष्या का<br>दुष्परिणाम",
        gujrati: "ઈર્ષ્યાના<br>દુષ્પરિણામો",
      },
      slides: [
        {
          video: "1.mp4",
          content: {
            english: "We become Sad",
            hindi: "हम दुःखी हो जाते हैं",
            gujrati: "આપણે દુઃખી થઈ જઈએ છીએ.",
          },
        },
        {
          video: "2.mp4",
          content: {
            english: "We become Angry",
            hindi: "हम गुस्सा हो जाते हैं",
            gujrati: "આપણે ગુસ્સે થઈ જઈએ છીએ.",
          },
        },
        {
          video: "3.mp4",
          content: {
            english: "We become alone",
            hindi: "हम अकेले हो जाते हैं",
            gujrati: "આપણે એકલા થઈ જઈએ છીએ",
          },
        },
        {
          video: "4.mp4",
          content: {
            english: "We stop talking to our parents",
            hindi: "हम अपने माँ - बाप से बात करना बंद कर देते हैं",
            gujrati: "આપણે આપણા માતા- પિતા સાથે વાત કરવાનું બંદ કરી દઈએ છીએ",
          },
        },
        {
          video: "5.mp4",
          content: {
            english: "We start talking rudely with everyone",
            hindi: "हम सभी से रूखेपन से बात करने लगते हैं",
            gujrati: "આપણે દરેક સાથે અસભ્ય રીતે વાત કરવાનું શરૂ કરીએ છીએ",
          },
        },
        {
          video: "6.mp4",
          content: {
            english:
              "We ignore our siblings / friends or do not play with them",
            hindi:
              "हम अपने भाई-बहनों और दोस्तों की उपेक्षा करते हैं या उनके साथ खेलते नहीं हैं",
            gujrati:
              "આપણે આપણા ભાઈ- બહેન, મિત્રોની અવગણના કરીએ છીએ અથવા તેમની સાથે રમતા નથી",
          },
        },
        {
          video: "7.mp4",
          content: {
            english: "We may not share or help our friends",
            hindi:
              "हम अपने दोस्तों के साथ कोई भी चीज़ बाँटते नहीं हैं या उनकी मदद नहीं करते हैं",
            gujrati:
              "આપણે આપણા મિત્રો સાથે કોઈ પણ વસ્તુ વહેંચતા નથી અથવા તેમની મદદ કરતા નથી.",
          },
        },
      ],
    },

    how: {
      file: "how.html",
      watchVideo: "assets/videos/2.mp4",
      videoDir: "assets/videos/4/",
      endLink: {
        href: "./pranam.html",
        label: {
          english: "Pranam",
          hindi: "प्रणाम",
          gujrati: "પ્રણામ"
        }
      },
      title: {
        english: "4. How to handle Jealousy?",
        hindi: "4. ईर्ष्या को कैसे नियंत्रित करें?",
        gujrati: "4. ઈર્ષ્યાને કેવી રીતે નિયંત્રિત કરવી?",
      },
      label: {
        english: "How to handle<br>Jealousy?",
        hindi: "ईर्ष्या को कैसे<br>नियंत्रित करें?",
        gujrati: "ઈર્ષ્યાને કેવી રીતે<br>નિયંત્રિત કરવી?",
      },
      slides: [
        {
          video: "1.mp4",
          content: {
            english: "Be content with what we have",
            hindi: "हमारे पास जो है, उसमे संतोष रखें",
            gujrati: "આપણી પાસે જે છે તેનાથી સંતોષ રાખવો જોઈએ.",
          },
        },
        {
          video: "2.mp4",
          content: {
            english: "Do not demand to get you the same things as your friend",
            hindi:
              "जो चीज़ें आपके दोस्त के पास हैं, उन्हीं चीज़ों की माँग न करें।",
            gujrati:
              "જે વસ્તુઓ આપણા મિત્ર પાસે હોય, તેવી જ વસ્તુઓની માંગણી ન કરવી.",
          },
        },
        {
          video: "3.mp4",
          content: {
            english: "Learn to appreciate your friend's success",
            hindi: "अपने दोस्त की सफलता की प्रशंसा करना सीखें।",
            gujrati: "તમારા મિત્રની સફળતાની પ્રશંસા કરતા શીખો.",
          },
        },
        {
          video: "4.mp4",
          content: {
            english:
              "Talk politely and discuss with parents, teachers about your jealousy",
            hindi:
              "माता - पिता, शिक्षकों से ईर्ष्या के बारे में विनम्रता से चर्चा करें",
            gujrati:
              "ઈર્ષ્યા અંગે માતા- પિતા, શિક્ષકો સાથે નમ્રતાપૂર્વક ચર્ચા કરવી.",
          },
        },
        {
          video: "5.mp4",
          content: {
            english: "Do not misbehave or compare yourself with others.",
            hindi: "अपनी तुलना दूसरों के साथ न करें और अशिष्ट बर्ताव न करें",
            gujrati:
              "પોતાની સરખામણી બીજાઓ સાથે ન કરવી, અને અસભ્ય વર્તન ન કરવું.",
          },
        },
      ],
    },
  },
};

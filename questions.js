// Shared poll definition – used by the phone page (index.html) and the projector page (present.html).
// Edit text here if you want to change a question. Keep the number of options the same once people start answering.
window.POLL = {
  title: { si: 'කෘෂිකර්මය සඳහා ඩිජිටල් අලෙවිකරණය', en: 'Digital Marketing for Agriculture' },
  questions: [
    { id: 'age', type: 'single', section: ['ඔබ ගැන', 'About you'],
      si: 'ඔබේ වයස් පරාසය', en: 'Your age range',
      options: [['අවු. 25ට අඩු', 'Under 25'], ['25–34', '25–34'], ['35–44', '35–44'],
                ['45–54', '45–54'], ['අවු. 55ට වැඩි', '55 and above']] },
    { id: 'role', type: 'single', section: ['ඔබ ගැන', 'About you'],
      si: 'ඔබේ තනතුර', en: 'Your role',
      options: [['කෘෂිකර්ම උපදේශක', 'Agriculture Instructor'], ['කෘෂි ව්‍යාප්ති නිලධාරී', 'Extension Officer'],
                ['පුහුණුකරු / කථිකාචාර්ය', 'Trainer / Lecturer'], ['පරිපාලන නිලධාරී', 'Administrative Officer'], ['වෙනත්', 'Other']] },
    { id: 'devices', type: 'multi', section: ['උපාංග', 'Devices'],
      si: 'දිනපතා භාවිත කරන උපාංග', en: 'Devices you use daily (pick all)',
      options: [['ස්මාර්ට් ජංගම දුරකථනය', 'Smartphone'], ['ලැප්ටොප්', 'Laptop'], ['ඩෙස්ක්ටොප් පරිගණකය', 'Desktop'], ['ටැබ්ලට්', 'Tablet']] },
    { id: 'internet', type: 'single', section: ['උපාංග', 'Devices'],
      si: 'සේවා ස්ථානයේ අන්තර්ජාලය', en: 'Internet access at work',
      options: [['සැමවිටම', 'Always'], ['සමහර විට', 'Sometimes'], ['කලාතුරකින් / නැත', 'Rarely / never']] },
    { id: 'platforms', type: 'multi', section: ['සමාජ මාධ්‍ය', 'Social media'],
      si: 'ඔබ භාවිත කරන සමාජ මාධ්‍ය', en: 'Social media you use (pick all)',
      options: [['Facebook', 'Facebook'], ['WhatsApp', 'WhatsApp'], ['YouTube', 'YouTube'], ['TikTok', 'TikTok'], ['Instagram', 'Instagram'], ['කිසිවක් නැත', 'None']] },
    { id: 'official', type: 'single', section: ['සමාජ මාධ්‍ය', 'Social media'],
      si: 'රාජකාරී / ගොවි සේවා සඳහා මේවා භාවිත කරනවාද?', en: 'Do you use them for official or farmer work?',
      options: [['ඔව්, නිතිපතා', 'Yes, regularly'], ['සමහර විට', 'Sometimes'], ['කවදාවත් නැත', 'Never']] },
    { id: 'skills', type: 'scale', section: ['කුසලතා', 'Skills'],
      si: 'ඔබේ හැකියාව ලකුණු කරන්න', en: 'Rate yourself: 1 = never done, 5 = very confident',
      rows: [['Facebook පෝස්ට් එකක් දැමීම', 'Posting on Facebook', 'Facebook post'],
             ['ජංගම දුරකථනයෙන් වීඩියෝ සෑදීම', 'Making a phone video', 'Phone video'],
             ['පෝස්ටර් නිර්මාණය (Canva)', 'Designing a poster', 'Poster design'],
             ['ගොවි WhatsApp සමූහ පවත්වාගෙන යාම', 'Running a farmer WhatsApp group', 'WhatsApp group'],
             ['Reach / Insights කියවීම', 'Reading reach / insights', 'Reading insights'],
             ['ගෙවීම් සහිත දැන්වීම් පළ කිරීම', 'Running a paid ad', 'Paid ads']] },
    { id: 'q1', type: 'quiz', section: ['ප්‍රශ්නාවලිය', 'Quiz'], correct: 0,
      si: 'Facebook හි "Reach" යනු කුමක්ද?', en: 'What does "Reach" mean on Facebook?',
      options: [['පෝස්ට් එක දුටු වෙනස් පුද්ගලයින් ගණන', 'Number of different people who saw the post'],
                ['ලැබුණු Like ගණන', 'Number of likes'], ['Share කළ වාර ගණන', 'Number of shares'], ['Comment ගණන', 'Number of comments']] },
    { id: 'q2', type: 'quiz', section: ['ප්‍රශ්නාවලිය', 'Quiz'], correct: 0,
      si: 'ගොවීන් වැඩි පිරිසකට ළඟා වීමට වඩාත් උදව් වන්නේ?', en: 'What helps a post reach more farmers?',
      options: [['පැහැදිලි ඡායාරූපයක් / වීඩියෝවක් + කෙටි සිංහල පණිවිඩයක්', 'A clear photo or video with a short message in their language'],
                ['දිගු ලිපියක් පමණක්', 'A long text-only post'], ['එකම link එක නැවත නැවත දැමීම', 'Posting the same link again and again'],
                ['අදාළ නැති බොහෝ අය tag කිරීම', 'Tagging many unrelated people']] },
    { id: 'q3', type: 'quiz', section: ['ප්‍රශ්නාවලිය', 'Quiz'], correct: 0,
      si: 'Hashtag (#) භාවිත කරන්නේ ඇයි?', en: 'What is a hashtag (#) used for?',
      options: [['මාතෘකාව අනුව පෝස්ට් සොයාගැනීම පහසු කිරීමට', 'Grouping posts by topic so people can find them'],
                ['පෝස්ට් එක ලස්සන කිරීමට', 'Decorating the post'], ['පෝස්ට් එක පෞද්ගලික කිරීමට', 'Making the post private'],
                ['පෝස්ට් එක Boost කිරීමට ගෙවීමට', 'Paying to boost the post']] },
    { id: 'learn', type: 'single', section: ['අපේක්ෂා', 'Expectations'],
      si: 'අද වැඩිපුරම ඉගෙන ගැනීමට කැමති කුමක්ද?', en: 'What do you most want to learn today?',
      options: [['අන්තර්ගත නිර්මාණය', 'Creating content'], ['ජංගම දුරකථනයෙන් වීඩියෝ', 'Phone videos'],
                ['අනුගාමිකයින් වැඩි කිරීම', 'Growing followers'], ['ගෙවීම් සහිත දැන්වීම්', 'Paid ads'], ['WhatsApp හරහා ගොවීන්ට ළඟා වීම', 'Reaching farmers on WhatsApp']] },
    { id: 'challenge', type: 'single', section: ['අපේක්ෂා', 'Expectations'],
      si: 'ඔබේ ලොකුම බාධාව කුමක්ද?', en: 'What is your biggest challenge?',
      options: [['කාලය නැත', 'No time'], ['දැනුම / කුසලතා මදි', 'Not enough skills'], ['උපකරණ / අන්තර්ජාලය නැත', 'No equipment / internet'],
                ['ගොවීන් අන්තර්ජාලයේ නැත', 'Farmers are not online'], ['නිල අනුමැතිය නැත', 'No official approval']] },
    { id: 'whatsapp', type: 'phone', section: ['සම්බන්ධතා', 'Contact'],
      si: 'ඔබේ WhatsApp අංකය', en: 'Your WhatsApp number',
      hint: ['උදා: 07XXXXXXXX', 'e.g. 07XXXXXXXX'] }
  ]
};

// Readiness score out of 100: skill ratings count 60%, quiz counts 40%.
window.POLL.score = function (r) {
  const s = (r.skills || []).filter(v => v >= 1 && v <= 5);
  const skillAvg = s.length ? s.reduce((a, b) => a + b, 0) / s.length : 1;
  const quizQs = window.POLL.questions.filter(q => q.type === 'quiz');
  const quiz = quizQs.filter(q => r[q.id] === q.correct).length;
  const readiness = Math.round(((skillAvg - 1) / 4) * 60 + (quiz / quizQs.length) * 40);
  const level = readiness < 35 ? 0 : readiness <= 65 ? 1 : 2;
  return { skillAvg, quiz, quizTotal: quizQs.length, readiness, level };
};
window.POLL.levels = [['ආරම්භක', 'Beginner'], ['මධ්‍යම', 'Intermediate'], ['උසස්', 'Advanced']];

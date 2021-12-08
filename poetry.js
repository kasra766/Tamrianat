function poetry(verse) {
  const verses = [
  "به لاله نرگس مخمور گفت وقت سحر  که هر که در صف باغ است صاحب هنریست",
  "بنفشه مژدهٔ نوروز میدهد ما را  شکوفه را ز خزان وز مهرگان خبریست",
  "ای خوشا مستانه سر در پای دلبر داشتن  دل تهی از خوب و زشت چرخ اخضر داشتن",
  "هر کجا نور است چون پروانه خود را باختن  هر کجا نار است خود را چون سمندر داشتن",
  "برهنمائی چشم، این ره خطا رفتم  گناه دیدهٔ من بود، این خطاکاری",
  "آب نالید، وقت جوشیدن  کاوخ از رنج دیگ و جور شرار",
  "نه کسی میکند مرا یاری  نه رهی دارم از برای فرار",
  "ای جسم سیاه مومیائی  کو آنهمه عجب و خودنمائی",
  "معلوم نشد به فکر و پرسش  این راز که شاه یا گدائی",
  "وقتی ز غرور و شوق و شادی  پا بر سر چرخ می‌نهادی",
  "پیکان قضا بسر خلیدت  چون شد که ز پا نیوفتادی",
  "صد قرن گذشته و تو تنها  در گوشهٔ دخمه ایستادی",
  "کردی ز کدام جام می نوش  کاین گونه شدی نژند و مدهوش",
  "در عالم نیستی، چه دیدی  کاینسان متحیری و خاموش",
  "شاید که سمند مهر راندی  نانی بگرسنه‌ای رساندی",
  "گوئی بتو داده‌اند سوگند  کاین راز، نهان کنی به لبخند"
];
  let result = null;
  let check = true;
  const lastChar = verse[verse.length - 1];
  
  const chars = ['ء', 'آ', 'أ'];
  
  const aChar = 'ا';
	
  for (let i = 0; i < verses.length; i++) {
    const item = verses[i].trim();
    const fristChar = item[0];
	
	if(fristChar === aChar && chars.includes(lastChar)){
		result = item;
		return result;
	}
		
    if (lastChar === fristChar) {
      result = item;
      return result;
    }
    if (i === verses.length - 1) {
      check = false;
    }
  }
  if (!check) {
    for (let i = 0; i < verses.length; i++) {
      const item = verses[i].trim().split("  ");
      const verseOne = item[0];
      const lastCharVerseOne = verseOne[verseOne.length - 1];
	  const firstChar = verses[i].trim()[0];
	  
	if(firstChar === aChar && chars.includes(lastCharVerseOne)){
		return verses[i];
	}	  
	  
      if (lastChar === lastCharVerseOne) {
        check = true;
        return verses[i];
      }
      if (i === verses.length - 1) {
        return null;
      }
    }
  }
}

export default poetry;
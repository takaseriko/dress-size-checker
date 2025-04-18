const sizeTable = [
    { size: "5号", bust: 78, waist: 56, hip: 82, shoulder: 35 },
    { size: "7号", bust: 82, waist: 60, hip: 86, shoulder: 36 },
    { size: "9号", bust: 86, waist: 64, hip: 90, shoulder: 37 },
    { size: "11号", bust: 90, waist: 68, hip: 94, shoulder: 38 },
    { size: "13号", bust: 94, waist: 72, hip: 98, shoulder: 39 }
  ];
  
  document.getElementById("sizeForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const bust = parseFloat(document.getElementById("bust").value);
    const waist = parseFloat(document.getElementById("waist").value);
    const hip = parseFloat(document.getElementById("hip").value);
    const shoulder = parseFloat(document.getElementById("shoulder").value);
  
    let closestSize = null;
    let smallestDifference = Infinity;
  
    sizeTable.forEach(s => {
      const diff = 
        Math.abs(bust - s.bust) +
        Math.abs(waist - s.waist) +
        Math.abs(hip - s.hip) +
        Math.abs(shoulder - s.shoulder);
  
      if (diff < smallestDifference) {
        smallestDifference = diff;
        closestSize = s.size;
      }
    });

  const imageMap = {
    "5号": "size5.PNG",
    "7号": "size7.PNG",
    "9号": "size9.PNG",
    "11号": "size11.PNG",
    "13号": "size13.PNG"
  };

  const dressPic = document.getElementById("dressPic");
  dressPic.src = imageMap[closestSize];
  dressPic.style.display = "block";

  
    document.getElementById("result").innerText =
      `あなたにおすすめのサイズは「${closestSize}」です。`;
  });
  

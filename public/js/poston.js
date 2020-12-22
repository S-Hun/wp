const form = document.querySelector('form');

form.onsubmit = () => {
    let Check = false;
  
    if (!form.subject.value) {
      alert("제목을 입력하세요.");
    } else if (!form.text.value) {
      alert("내용을 입력하세요.");
    } else {
        Check = true;
    }
  
    if(Check) {
        alert("등록되었습니다.");
    }
    return Check;
};
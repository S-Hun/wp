 # **Week 2** 웹 응용 프로그래밍
 ## 1. **HTML5** 기초

> **태그** <br>
>> * HTML 페이지에서 객체를 만들 때 사용 <br>
>> * 일반적으로 시작 태그와 끝 태그가 쌍을 이룸 <br>
>> * 단독으로 사용하는 태그도 존재 <br>
>> * 일부 태그는 태그 내부에 다른 태그가 포함될 수 있음 <br>

<br>

> 속성
>> * 태그에 정보를 추가할 때 사용

<br>
 
> 주석
>> * HTML 코드를 설명하기 위해 작성 <br>
>> * `<!--와 -->` 사이에 작성 <br>
    
<hr>

## 2. **HTML5** 페이지 구조

> !doctype
>>  * HTML의 버전을 명시 <br>
>>  * HTML5는 !doctype 다음에 html이라고 작성 <br>

<br>
 
> html 태그
>>  * 모든 HTML 페이지의 루트<sup>root</sup> 요소 <br>
>>  * 모든 HTML 태그는 html 태그 내부에 작성 <br>
>>  * lang 속성에는 사용하는 언어를 설정 <br>

<br>
 
> head 태그
>>  * HTML 페이지의 여러 정보들을 제공 <br>
>>  * head 태그에는 다음과 같은 태그만 포함 가능 <br>

<br>
 
> body 태그
>> * 실제 사용자에게 보여지는 내용을 작성하는 부분
>> * body 태그 내부에 사용되는 태그가 매우 다양
            
<hr>

## 2. **기본 태그**

> 제목 태그
>>  * 제목을 나타내기 위한 태그

<br>
 
>  본문 관련 태그
>>  * p: 단락<sup>paragraph</sup>을 나타내는 태그
>>  * br: 줄바꿈 태그
>>  * hr: 수평줄을 긋는 태그
>>  * HTML에서의 공백 문자 처리
>>  * 공백문자를 문자 사이에 여러 개 입력하여도 하나만 입력한 것으로
>>  처리되며, 줄 바꿈을 하더라도 적용이 되지 않음
   
<br>
      
> 글자 형태 관련 태그
>> * b: 굵은 글자
>> * i: 기울어진 글자
>> * small, sub, sup, ins, del 등
    
<br>
 
> 앵커 태그
>> * 페이지 내에 다른 위치로 이동할 때 사용
>> * 또는 다른 웹페이지로 이동할 때 사용
>> * HyperText 지원 및 a 태그를 사용
>> * ./파일명: 현재 디렉토리
        
<br>
 
> 목록 관련 태그
>> *  ul: 순서가 없는 목록을 만드는 태그
>> *  ol: 순서가 있는 목록을 만드는 태그
>> *  li: 목록 태그의 아이템 태그
    
<br>
     
> 표 관련 태그
>> *  표를 만들기 위한 태그
>> *  다른 태그보다 사용이 다소 복잡하며, 아래의 태그들이 table 태그 안에서 사용
>> *  rowspan: 행의 크기를 지정하는 속성
>> *  colspan: 열의 크기를 지정하는 속성
      
<br>
   
> 공간 분할 태그 
>> inline 요소 <sub>대표적으로 `<span>`</sub>
>>> * 옆으로 나열되는 요소
>>> * a 태그, 글자 형태 관련 태그 등
     
<br>
 
>> block 요소 <sub>대표적으로 `<div>`</sub>
>>> * 위에서 아래로 쌓이는 형태로 나열되는 요소
>>> * 제목 태그, p 태그 등

<br>

>> 시멘틱<sup>semantic</sup> 태그
>>> * 페이지의 구조를 의미적으로 분석 가능
>>> * `<div>`와 비슷하지만 태그에 의미가 존재
        
<hr>

## 3.  **멀티미디어 관련 태그**

> 이미지 태그
>> * HTML 문서에 이미지를 넣기 위해 img 태그를 사용
>> * img 태그의 주요 속성: src, alt, width, height
    
<br>
     
> 오디오 태그
>> * HTML 문서에 오디오를 재생하기 위해 audio 태그를 사용
>> * audio 태그의 주요 속성: src, preload, autoplay, loop, controls
   
<br>
      
> 비디오 태그
>> * HTML 문서에 동영상을 재생하기 위해 video 태그를 사용
>> * vedio 태그의 주요 속성: src, poster, preload, autoplay, loop, controls, width, height

<hr>

## 4.  **입력 양식 태그**

> 입력 양식 태그와 form 태그
>>  입력 양식 태그는 입력 양식을 만들 때 사용하는 태그
>>  form 태그
>>>  *  입력 양식을 만들기 위한 태그
>>>  *  입력을 위한 태그: input, select, textarea 등
    
<br>
      
> input 태그
>> * 사용자로부터 정보를 입력받는 기능을 수행하는 태그
>> * inpurt 태그의 속성: type, name, placeholder, disabled, readonly, value
>> * input 태그의 type 속성값이 button, reset, submit의 경우는 button 태그를 사용
    
<br>
     
> textarea 태그
>> * 사용자로부터 여러 줄의 텍스트를 입력 받는 기능을 수행하는 태그
>> * textarea 태그의 속성: cols, rows, name, placeholder, disabled
    
<br>
     
> select 태그
>> * 여러 개의 목록에서 몇 가지를 선택할 수 있는 입력 양식 요소
>> * select 태그 및 select 태그와 함께 사용되는 태그: select, optgroup, option
>> * select 태그의 속성: name, multiple, disabled

<br>
 
>  label 태그
>> * input 태그와 같은 입력 양식에 대한 설명을 넣기 위해 사용
>> * id의 속성값은 같은 문서 내에서는 중복되지 않게 사용한다.
   
<br>
      
>  fieldset 태그와 legend 태그
>> * fieldset 태그는 입력 양식들을 하나의 그룹으로 묶기 위해 사용
>> * legend 태그는 fieldset에 대한 설명을 제공

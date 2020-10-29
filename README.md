# wp-animation
## 웹 응용프로그래밍 5주차 과제 
|col1|col2|
|---|---|
|**학번**|2016038028|
|**이름**|배석훈|
|**제출기한**|2020.10.29|

---

### transition
이벤트와 관련된 변화의 특성을 지정
|이름|설명|
|---|---|
|transition|단축 속성 지정|
|---|---|
|transition-duration|이벤트 처리가 재생되는 시간 지정|
|transition-property|변형할 속성을 지정|
|transition-timing-function|수치 변형 함수를 지정|
이 속성은 위치, 크기, 박스, 테두리, 색상, 투명도, 변환(transform)에 적용될 수 있습니다.

---

## transform
객체를 2차원 및 3차원으로 변환할 수 있다.
적용 <i>transform: 변환 함수</i>
|변환 함수|설명|
|---|---|
|translate(x,y)|특정 크기만큼 이동|
|translateX(x)|X축으로 특정 크기만큼 이동|
|translateY(y)|Y축으로 특정 크기만큼 이동|
|scale(x,y)|특정 크기만큼 확대 또는 축소|
|scaleX(x)|X축으로 특정 크기만큼 확대 또는 축소|
|scaleY(y)|Y축으로 특정 크기만큼 확대 또는 축소|
|skew(x,y)|특정 각도만큼 기울임|
|skewX(x)|X축으로 특정 각도만큼 기울임|
|skewY(y)|Y축으로 특정 각도만큼 기울임|
|rotate(z)|특정 각도만큼 회전|

변환 함수를 적용하는 순서에 따라 결과도 달라진다는 특징이 있다.

**transform-origin** : 변환의 중심점을 변경하는 속성으로 아래와 같이 사용한다.

<i>| transform-origin: <X축 중심 위치> <Y축 중심 위치> |</i>

3D의 경우에는 Z축이 추가되며 축약 명령어에 3d가 붙는다.

|변환 함수|설명|
|---|---|
|translate3d(x,y,z)|특정 크기만큼 이동|
|translateZ(z)|Z축으로 특정 크기만큼 이동|
|scale3d(x,y,z)|특정 크기만큼 확대 또는 축소|
|scaleZ(z)|Z축으로 특정 크기만큼 확대 또는 축소|
|rotate3d(x,y,z)|특정 각도만큼 기울임|
|rotateX(z)|X축으로 특정 각도만큼 회전|
|rotateZ(y)|Y축으로 특정 각도만큼 회전|
|rotateY(z)|Z축으로 특정 각도만큼 회전|

**transform-style** : 속성을 적용한 것이 자신에게만 적용되는지 자손에게도 적용될지를 정함
<i>| transform-style: flat, preserve-3d |</i>

**transform-visibility** : 속성을 적용한 것이 자신에게만 적용되는지 자손에게도 적용될지를 정함

**backface-visibility** : 3차원 공간에서 평면의 후면을 보일지 말지를 결정하는 속성

<i>| backface-visibility: hidden or visible |</i>

**perspective** : 속성을 이용하면 원근감을 줄 수 있다. 관찰자의 시점이 얼마나 멀리 떨어져있는지를 설정하는 속성이다.

<i> | perspective: 0~ | </i>

---

## animation

특정 요소에 애니메이션을 적용하기 위해 사용

|속성명|설명|
|---|---|
|animation|다양한 속성을 요약하여 적용|
|animation-delay|이벤트 이후 재생 지연 시간을 지정|
|animation-direction|애니메이션의 진행 방향을 지정|
|animation-duration|애니메이션의 재생 시간을 지정|
|animation-iteration-count|애니메이션의 반복 횟수를 지정|
|animation-name|애니메이션의 이름을 지정|
|animation-play-state|애니메이션의 재생 상태를 지정|
|animation-timing-function|애니메이션의 타이밍 함수를 지정|

애니메이션 적용을 위해서는 `@keyframe` 규칙으로 애니메이션을 정의해야 한다.

**example**

```
@keyframes anim1 { 
  from {
    left: 0;
    transform: rotate(0deg);
  }
  50% {
    left: 500px;
  }
  to {
    left: 500px;
    transform: rotate(360deg);
  }
}
```

---

첫번째 페이지는 같은 방식에서 transition과 javascript 코드를 이용하여 자연스러운 사이드바를 작성하였습니다.
수업 내용에서 다룬 내용의 javascript 코드를 사용하였으며 클릭 이벤트에 대해서
**transition의 left 위치 -100%에서 500ms내**에 원래 위치로 돌아와 표시되도록 하였습니다.

그밖에 메인 화면에 타이틀 사진에 animation을 적용하여 opacity를 0에서 1로 조정하여 서서히 나타나도록 하였습니다.
GRIDVIEW에는 고양이 사진이 보이는데, HOVER와 함께 trasform을 이용하여 opacity 조정과 z-index 조정이 이루어지도록 하였습니다.

마지막으로 3DVIEW에는 transform3D를 이용하여 육면체를 나타내는 실습을 따라해보았습니다.
# wp-animation
## 웹 응용프로그래밍 5주차 과제 
|col1|col2|
|---|---|
|**학번**|2016038028|
|**이름**|배석훈|
|**제출기한**|2020.10.29|

---

### transition

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
0. Hook은 무엇인가?
   React Component가 화면에 1차로 랜더링 된 이후에, 비동기로 처리되어야 하는 부수적인 효과들을 흔히 Side Effect 라고 한다. Hook은 이 side effect을 수행하는 역할을 한다.
   "컴포넌트는 자신의 state가 변경되거나, 부모에게서 받은 props가 변경되었을 때 리렌더링 된다"
   => hook을 이용하여 불필요한 렌더링을 방지하여 최적화를 시킬 수 있다.

1. useState
   컴포넌트에서 동적인 값을 상태라고 하는데, useState를 통해 이 state를 변경할 수 있다.

   state란 무엇인가?
   (1) props를 통해 부모로부터 전달된다 => props지, state가 아니다
   (2) 시간이 지나도 변하지 않는다 => state가 아니다
   (3) 컴포넌트의 다른 state또는 props를 기반으로 계산할 수 있나? => state가 아니다.(굳이 안만들어도 되는 상황)

   단점 : useState를 과도하게 사용하면, 관리해야 하는 state가 너무 많아져 상태관리하는데 어려움에
   처할 수 있다. 위 규칙을 지켜서 필요할때만 useState를 사용하는 것이 중요하며, 함께 업데이트되는 상태는
   한 useState로 묶음으로서 과도한 사용을 방지할 수 있다.

2. useRef

   useRef를 사용하는 2가지 목적
   (1) 불필요한 렌더링을 방지하고 싶을 때
   렌더링시키지 않고 변화된 값을 저장하는 느낌? state처럼 값이 변화할 때 매번 렌더링이 필요없을 때
   current속성을 가지고 있는 객체를 반환하는데,인자로 넘어온 초기값을 current속성에 할당한다. current속성은 값을 변경해도 state를 변경할 때처럼 컴포넌트가 다시 렌더링되지 않는다. 컴포넌트가 다시 렌더링될때도 마찬가지로 이 current 속성의 값의 유실되지 않는다. 컴포넌트가 렌더링이 필요하지 않은 상태에서 그 속성에 접근해야 하거나, 또는 어떠한 Dom에 접근해야 할때 useRef를 사용하면 좋다.

   (2) dom에 직접적으로 접근할 때
   예를 들어 input에 focus를 줄때, input에 접근해야 한다. 이 때 useRef를 사용하면 돔에 접근할 수 있다.
   이때 useRef변수명.current를 사용하여 접근한다. ref객체의 current는 선택한 dom이라는 뜻이다. current의 default값은 useRef를 통해 ref를 선언할 때 넣어준 argument값이다.

   단점 : dom에 접근하는 hook이기 때문에 react의 일반적인 라이프사이클과 다르게 작동한다. 따라서 해당 dom이 변경되거나 없어지면 에러가 발생할 수 있다. 또한 useRef는 상태를 변경해주는 기능이 없기 때문에(장점) 상태변화가 필요하면 추가 로직을 작성해야 한다.

3. useCallback (최적화 hook)

   useCallback(()=>{},[])
   useMemo(()=>값, [])

   특정 함수를 재사용하고 싶을 때 사용한다. 함수들은 렌더링될때 마다 새로 만들어지며, 이는 효율성을 저하시킨다.나중에 props가 바뀌지 않으면 DOM에 새로 렌더링을 하지 않는 작업을 하기 위해서는 함수를 재사용해야 한다.
   한 파일에서 callback함수로 만든 함수를 다른 파일에서 props로 전달받아 사용할 수 있다.

   부모함수에서 일반함수를 만들어 자식에게 props로 전달하는 것과 useCallback을 만들어 전달하는 것의 차이
   => 부모 컴포넌트가 리렌더링 될 때 자식 컴포넌트에서 사용하는 함수가 재생성되어 자식 컴포넌트가
   불필요하게 리렌더링되는 상황이 발생할 수 있다.

   단점 : useCallback을 과도하게 사용하면, 코드가 복잡해질 수 있다. useCallback의 목적이 계속해서 똑같은 함수를 렌더링을 하는 것을 방지하는 것이므로, 만약 한번만 렌더링되는 함수라면 useCallback을 사용하지 않는게 낫다.
   또한 useMemo와 같이 함수를 저장할 때 캐싱을 하여 메모리를 사용하는 것이기 때문에 해당 함수를 꼭 useCallback으로 저장해야 되는지에 대해서 고려가 필요하다.

   return 내부에 JSX에 넣는 함수들은 거의 다 바깥으로 빼서 useCallback으로 감싸면 된다.(아니다.효율성을 판단해서)

4. useMemo (최적화 hook)

   복잡하고 어려운 계산(함수)가 반복적으로 일어나지 않도록 값을 저장해서 쓸 수 있게 한다. 두번째 인자로 들어온 의존성 배열이 업데이트 될때에만 계산을 다시 실행하고 그 값을 저장한다.

   단점: useCallback과 비슷한데, 값을 저장한다는 것은 메모리를 소비한다는 뜻이다. 재활용되지도 않을 불필요한 값을 useMemo로 쓰면 메모리가 낭비될 수 있다. 필요할때만 사용하는 것이 중요하다!

5. React.memo(최적화 hook)
   부모 컴포넌트가 렌더링이 되면 자식 컴포넌트도 자동으로 렌더링이 된다.
   이때 자식 컴포넌트가 부모에게서 받은 props가 동일하다면, 같은 렌더링이 불필요하게 일어나게 되는 것이다.
   이때 props의 변경사항이 없을 경우 자식 컴포넌트의 렌더링을 방지해주는 것이 React.memo이다.

   다음과 같을 때 react.memo를 사용하는 것이 좋다.

   1. 컴포넌트가 같은 Props로 자주 렌더링 될때
   2. 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야 한다면

   react.memo는 오직 props변화에만 의존하는 최적화 방법이다.

6. useEffect
   useEffect는 hook을 사용해서 컴포넌트가 마운트 됐을 때, 언마운트 됐을 때, 업데이트 될때(특정 props이 바뀔때) 특정작업을 하도록 도와주는 hook 함수입니다. useEffect은 함수 컴포넌트에서 componentDidMount, componentDidUpdate, componentWillUnmount 같은 라이프사이클 메소드를 대체하는 역할을 한다.
   useEffect의 안에는 함수형태로 부수효과 코드가 들어가고 return안에는 cleanup 함수가 들어간다.
   useEffect의 경우 두번째 인자로 들어가는 의존성 배열이 중요한데, 이 배열은 useEffect가 해당 배열이 변경될때마다 실행되는 useEffect의 실행 조건이다. 만약 의존성 배열이 생략되면 useEffect은 컴포넌트가 렌더링될때마다 실행된다(사실상 일반 함수)

   단점 : useEffect는 순서에 따라 동작이 달라질 수 있고, 코드를 복잡하게 할 수 있다. 컴포넌트의 라이프사이클에 따라 필요할 때만 useEffect를 사용하는 게 중요하다.

   useEffect(()=>{
   console.log('hidden change')
   },[hidden])
   => 위 코드는 컴포넌트가 첫 렌더링될때 실행되고, 그 다음부터는 hidden이 바뀔 때마다 실행된다. 클래스 컴포넌트의 componentDidMount와 componentDidUpdate가 합쳐진 셈이다. return에 뒷정리 함수를 넣으면 componentWillUnMount도 실행할 후 있다.

   즉 데이터의 라이프사이클이 하나로 합쳐진 셈이다.

   마운트될 때 처음 한번만 실행하고 싶다면 두번째 인자에 빈 배열을 넣어주면 된다.

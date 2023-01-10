Goal
* 되도록 다양한 상황에 대처할 수 있는 컴포넌트

Convention
* Component 파일은 각 단어의 첫 글자를 대문자로 (ex.ChatLog)
* className 은 root element 는 소문자 단어, children 은 root className-children__detail (ex. container, container-input__amount)

Question
* (완)useState DIFF variable : useState 를 사용해야 데이터가 변경됐을 때 다시 렌더링 된다. 일반 변수도 데이터는 변경할 수 있지만 따로 렌더링 되지 않는다.
* (완)Json 배열에서 json 내부 key 개수에 따른 컴포넌트 생성 : Object.keys()

What's Next?
* json 데이터 배열 갱신 및 추가
    * json 내부에 포함된 데이터(key)에 따른 입력 컴포넌트 생성 (done)
    * 입력 컴포넌트 제출에 따른 데이터 갱신 ()
        * useState 를 사용해 선언한 json array 데이터 갱신

Issues
* Kirby.css 와 SnakeMouth.css 가 같은 css 클래스를 선택하고 있어서 두개 중 하나를 바꾸면 둘 다 바뀜.
    * 해결시도: 스타일드 컴포넌트 or css 동적화
* props 로 받은 변수가 handler 에서 undef 로 잡힌다.
    * 해결: onChange={(event)=>handlerFunction(event, ...values)}
* json 의 key 들을 '외부 배열[인덱스]'로 설정하는 방법은?
    * 아직 못 찾음.
    * 일반 변수로 받아서 삽입.
* useState 로 선언한 변수는 세터를 쓴 직후에 로그를 찍어보면 업데이트가 안 돼 있다.
    * 원인&해결: state 는 스냅샷처럼 작동한다. 최신 데이터를 이용하려면 일반 변수에 할당해서 사용할 수 있다.
* 일반 변수와 스테이트 상관관계 및 운용
    * State -> variable 변화 추적 x
    * variable 에 변화가 있을 때마다 setState() 호출해야함.
    * 데이터 변화 타이밍을 감지 or 데이터가 변하는 함수까지 state, setter 를 들고 가야함.(그켬...)
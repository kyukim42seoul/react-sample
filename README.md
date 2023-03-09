## What is this?

### Flow

-   main
    -   App
        -   MiniPage : page for `slide`
            -   Slide
                -   Item
        -   Box : component for `axios, promise, async/await`

### Slide with `Styled-components`

-   Key
    -   CSS >> transform: translate(100px) `이동(변화) 할 거리 설정`
    -   CSS >> transition-duration: 100ms `이동(변화) 속도 설정`
    -   Props to styled-component `거리 전달`

### send GET request to `node express server` and logging responsed data

-   Key
    -   Server Side : `CORS` allow configure
    -   Client Side : `call back / promise / async & await flow` fetch -> response => response.json().then(data => console.log(data))

### What's next?

-   WIP: send request, receive anything and handle that.
-   Websocket

export const Counseling = _ => (
    <>
        <article>
            <header>상담이력</header>
            <details open={true}>
                <ul>
                    <li>
                        <article>
                            <header>사용자</header>
                            <p>상담메시지1</p>
                        </article>
                    </li>
                    <li>
                        <article>
                            <header>응답</header>
                            <p>응답메시지1</p>
                        </article>
                    </li>
                    <li><article>
                        <header>사용자</header>
                        <p>상담메시지2</p>
                    </article></li>
                    <li><article>
                        <header>응답</header>
                        <p>응답메시지2</p>
                    </article></li>
                    <li><article>
                        <header>사용자</header>
                        <p>상담메시지3</p>
                    </article></li>
                    <li><article>
                        <header>응답</header>
                        <p>응답메시지3</p>
                    </article></li>
                </ul>
            </details>
        </article>
        <article>
            <header>상담입력</header>
            <textarea></textarea>
            <button>‣</button>
        </article>
    </>
)
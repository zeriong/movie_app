function Welcome(){
    return(
        <div className="welcome">
            <div className="welcome-head">ZETFLIX에 방문해주셔서 감사합니다.
                <div className="welcome-content">본 서비스는 토렌트 공유기반인 YTS웹사이트 API를 사용하여 만든 서비스입니다.<br/>
                    토렌트를 이용하여 실제로 다운로드 받을 수 있습니다.
                </div>
                <div className="welcome-tail">( 현재 보여지는 영화는 평점 8.8점 이상의 영화들로 구성되어있으며, 총 20개만 보여집니다. )</div>
            </div>
        </div>
    )
}
export default Welcome;
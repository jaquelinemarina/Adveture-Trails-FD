import style from './footer.module.css'

function Footer() {
    return (
        <footer className={style.container}>
            <p className={style.p}>© 2024 Jaqueline Marina</p>
            <div className={style.social}>
                <a href="https://github.com/jaquelinemarina"
                    className={style.github} target="_blank" rel="noreferrer">
                    <img src="https://s3-alpha-sig.figma.com/img/0f5e/e618/a1c0bc5c90eea474d8f54c99e0b2d23f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SP8JZfAZzwWVjZrgalJAiOOi56LXw7j5GcFeByqFMbmEv1Qxv-m7Xj1tlv~xyemNxUm19bZeXMsj8yydWigK0qPL-sMo~k80bw~2Imu6haJ23cIm-ExMdV3et4NCZxqDsOL-pUSbzryctAEghtQH6CvVbLSO75T~8oxLlPgEEENY6wGWGsHPDXvBMcMAU~ADtvFFxGxZ3~hw8tPbtquzY3kxGHhv-LZ0BykW3AY6ArgbFo6a4HNmGlFcAn1AQRd1YH1KGzmvdKS4wEH3Trjoi-WVB-tcWHBdqdI-sV8vzdPr6QP4pkpC5nQuW2kL~YzR08XTPqdcUiSOOio29Jhzcw__"
                        alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/jaquelinemarina/"
                    className={style.linkedin} target="_blank" rel="noreferrer">
                    <img src="https://s3-alpha-sig.figma.com/img/9dc7/c97f/63638c8d890006aa316aca0e31059204?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pjB~XvPav2MO2lL~Va4gpkvLyZPX9RiP2ugqKK196tbG8nv6JBZjrDEYxyWZ960sSlJ5yVY1DpbZuOoGXiY14bMHkdN5nJWHw2uX3AcHfGSMPn6jWlNt33dvH7u-tV7drbUX4BImdoWuvSvrr4GiPfgThRKmhiKYBwPFmoOZQKigloM1-LS6W1ZE-U7brOVNvC9oy1q4glPSBx2JGrIhkVP4dhbuy1MH5Be8Te7yv35cK4tYh4QBidsa~GgSJ8LSklE3J-KLHrhalDE6S-i9hDvGSoqZUkNsEGBojiF6vB0vXhsw~2jduHCju2ypXdj2TfL2BFVrwcdBJKIXhQnXDg__"
                        alt="LinkedIn" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
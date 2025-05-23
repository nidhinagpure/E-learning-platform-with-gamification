import '../../componet/infromation/Information.css';

export function Information(props) {
    const { image, plusnum, about } = props;
    return (
        <>
            <div>
                <div>
                    <img src={image} alt="student" className="info-image" /><br></br>
                </div>
                <div>
                    <span className="info-num">{plusnum}</span><br></br>
                    <span className="info-about">{about}</span>
                </div>
            </div>
        </>

    );
}

export default function Chooseus() {
    return (
        <>
            <div>
                <span className="chooseus">Why to choose</span><span className="rtc">Road To Code?</span>
            </div>

        </>
    );
}

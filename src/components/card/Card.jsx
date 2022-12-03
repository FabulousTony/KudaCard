import TwoCards from "../../img/Svg/TwoCards.svg"
import ForwardPointer from "../../img/Svg/ForwardPointer.svg"
import RequestCard from "../../img/Svg/RequestCard.svg"




function Card() {

    return (
        <main className="w-[30%] mx-auto mt-[5rem] bg-white">
            {/* 1st container => card & get a card */}
            <div className="flex justify-between items-center mb-[1rem]">
                <h1  className="text-[#4b2575] font-bold text-[1.5rem]  ">Cards</h1>
                <a href="https://app.kuda.com/dashboard/card/ng-physical-card">
                    <button className="border border-[#d8d1e1] rounded-[0.5rem] px-[1.5rem] h-[2.5rem] bg-[#f9f9f9] text-[#7d629a] font-medium hover:-translate-y-1 duration-500 ">Get A Card</button>
                </a>
            </div>

            {/* 2nd container => cards images & request card */}
            <div className="flex flex-col justify-center border rounded drop-shadow-2xl bg-white">
                <img src={TwoCards} alt="twocards" className="mt-[2rem] mx-auto w-[40%]" />
                <p className="text-center mx-auto mt-[1rem] w-[75%]">Spend online and offline with your Kuda cards.</p>
                <a href="https://app.kuda.com/dashboard/card/ng-physical-card" className="flex justify-center items-center rounded bg-white drop-shadow-2xl w-[79%] mt-[3rem] mb-[4rem] mx-auto">
                    <img src={RequestCard} alt="cardrequest" className="w-[3rem] " />
                    <div className="flex flex-col mr-[3rem]">
                        <h2 className="text-start text-[#4b2575] font-bold" >Request A Card</h2>
                        <p className="text-[0.6rem] text-start" >We'll send it to you wherever you are.</p>
                    </div>
                    <img src={ForwardPointer} alt="next" className="w-[0.5rem]" />
                </a>
            </div>
        </main>
    )
}

export default Card
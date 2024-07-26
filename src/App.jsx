
import Carousel from "./Carousel.jsx"

const slides = [
  "imgs/slide1.jpg",
  "imgs/slide2.jpg",
  "imgs/slide3.jpg",
  "imgs/slide4.jpg",
]
export default function App() {

  return (
    <>
      <div className="bg-red-300 p-4 mb-4">
        <h1 className=" text-4xl font-bold flex justify-center">Fit With Ngân</h1>
      </div>
      <div className="my-8 text-center">
        <p className="text-lg">Tham gia để</p>
        <p className="text-xl">Cung cấp chế độ dinh dưỡng cá nhân và chế độ luyện tập phù hợp với thể trạng</p>
      </div>
      <div className="grid grid-cols-3 m-8">
        <span className="bg-red-300 text-xl sm:text-2xl col-span-1 flex justify-center items-center p-5 h-40 font-bold rounded-2xl">Bạn sẽ học được những điều sau đây</span>
        <span className="col-span-2 mt-2 sm:mt-4"><ul className="bg-black text-white text-lg p-5">
          <li>Ăn uống đủ chất dinh dưỡng</li>
          <li>Giảm cân và giữ vững lâu dài</li>
          <li>Xây dựng nếp sống sinh hoạt lành mạnh</li>
        </ul></span>
      </div>
      <div className="bg-blue-300 p-4">
        <h2 className="font-bold text-4xl flex justify-center m-8 text-white">Thành quả mà Ngân và học viên đạt được</h2>
        <div className="max-w-screen-lg m-auto">
          <Carousel autoSlide={true}>
            {slides.map((s) => (
              <img className="object-contain" src={s}/>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="bg-red-300 m-12 text-center p-4 rounded-xl">
        <h1 className="font-bold text-4xl my-4">Đăng kí tham gia Ngân</h1>
        <button 
          onClick= {()=>{window.location.href = "https://forms.gle/QAQojmwtg99bp3M96"}} 
          className="bg-blue-300 rounded-2xl p-5 px-8 my-4 text-white text-3xl hover:bg-black">
          Đăng Kí
        </button>
      </div>
      <div className="max-w-screen-lg max-h-screen grid grid-cols-2 m-5 ml-10">
        <span className= "mr-5"><img className= "object-scale-down rounded-3xl" src="imgs/ngan.jpg"/></span>
        <span className="m-auto">
          <h3 className="text-3xl mb-2 font-bold">Chào các bạn, mình là Ngân</h3>
          <p className="text-xl">Mình có kinh nghiệm làm PT ...</p>
        </span>
      </div>
      
    </>
  );
}


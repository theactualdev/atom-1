import stars from "/stars.svg"
import Nav from "./comp/Nav"
import banner from "/banner.svg"
import com from "/com.svg"
import net from "/net.svg"
import org from "/org.svg"
import xyz from "/xyz.svg"
import tech from "/tech.svg"
import blog from "/blog.svg"
import fire from "/fire.svg"
import search from "/search.svg"
import scroll from "/scroll.svg"
import file from "/file.svg"
import pointer from "/pointer.svg"
import medal from "/medal.svg"
import gears from "/gears.svg"
import happy from "/happy.svg"
import ssl from "/ssl.svg"
import cross from "/cross.svg"
import storage from "/storage.svg"
import go from "/go.svg"

const card = [
  {
    name: ".com",
    oldPrice: "$14.99",
    newPrice: "$12.99",
    discount: "10% off",
    logo: com,
    popular: true
  },
  {
    name: ".net",
    oldPrice: "$14.99",
    newPrice: "$12.99",
    discount: "10% off",
    logo: net,
    popular: false
  },
  {
    name: ".org",
    oldPrice: "$14.99",
    newPrice: "$12.99",
    discount: "10% off",
    logo: org,
    popular: false
  },
  {
    name: ".xyz",
    oldPrice: "$14.99",
    newPrice: "$12.99",
    discount: "10% off",
    logo: xyz,
    popular: false
  },
  {
    name: ".tech",
    oldPrice: "$14.99",
    newPrice: "$12.99",
    discount: "10% off",
    logo: tech,
    popular: true
  },
  {
    name: ".blog",
    oldPrice: "$14.99",
    newPrice: "$12.99",
    discount: "10% off",
    logo: blog,
    popular: false
  }
]

const info = [
  {
    img: pointer,
    header: "Choose simplicity",
    paragraph: "Don't try to choose a complex domain instead try to choose a domain that is easy to remember."
  },
  {
    img: medal,
    header: "Keep it on-brand",
    paragraph: "Choose a distinct domain but keep in mind that it must be honest and related to your brand."
  },
  {
    img: gears,
    header: "Act fast",
    paragraph: "Don't wait too long. That perfect domain you've chosen may be chosen by someone else tomorrow."
  },
  {
    img: scroll,
    header: "Drop the hyphens",
    paragraph: "Just because the internet is high-tech doesn’t mean your domain name should be."
  },
  {
    img: file,
    header: "Know your requirements",
    paragraph: "Grab similar domain names, with other extensions, to protect your brand: .net, .org, .co, or even .photo."
  },
]

const question = [
  {
    q: "What is a domain name"
  },
  {
    q: "How do i buy a domain?"
  },
  {
    q: "How to choose a good domain?"
  },
  {
    q: "How to check domain availability?"
  },
  {
    q: "What is a domain name?"
  },
  {
    q: "How to choose a good domain?"
  },
]

function App() {
  return (
    <div className="wrapper bg-ghostWhite">
      <Nav />
      <section className="cta pt-[98px] flex flex-col justify-center items-center gap-[43px]">
        <div className="text gap-[22px] flex flex-col items-center text-center max-w-[673px]">
          <h1 className="font-poppins font-medium text-[64px]">Search and Buy a Domain In Minutes</h1>
          <p className="font-poppins font-normal text-2xl text-taupeGray">Our pricing structure is transparent from the outset, with no hidden charges.</p>
        </div>
        <form className="flex gap-4">
          <div className="domain relative">
            <input type="text" className="w-[585px] h-[77px] rounded-[20px] pl-[34px] focus:outline-none" placeholder="Enter your desired domain name" />
            <button className="px-[47px] py-5 rounded-[20px] bg-azureBlue font-poppins font-semibold text-xl text-white absolute right-3 top-[4px]">Search</button>
          </div>
          <button className="bg-black text-white flex gap-2 items-center rounded-[20px] px-3"><span><img src={stars} alt="Stars" /></span> Generate using AI</button>
        </form>
      </section>

      <section className="domains mt-[63px] mb-20">
        <div className="banner flex justify-center">
          <img src={banner} alt="Banner" />
        </div>
        <div className="extensions">
          <div className="text flex gap-[34px] flex-col mt-[62px] items-center">
            <h2 className="font-poppins font-semibold text-[40px]">Think About These Popular Domain Extensions</h2>
            <p className="font-poppins font-medium text-[18px] text-center max-w-[952px]">The perfect domain lets people know at a glance why you're online (and why you're awesome). Use the domain search bar and find the right domain now to grab more attention and visitors.</p>
          </div>
          <div className="doms flex gap-[84px] mt-[59px] flex-wrap justify-center">
            { card.map((item, index) => (
              <div key={index} className="card rounded-[12px] relative flex flex-col gap-[30px] px-[26px] min-w-[350px] py-[49px] bg-white">
                <div className="main flex flex-col gap-[22px]">
                  <div className="logo-sect flex flex-col gap-[10px]">
                    <div className="logo"><img src={item.logo} alt="Item Logo" /></div>
                    <p className="font-poppins font-semibold text-xl"> {item.name} </p>
                  </div>
                  <div className="pricing-sect flex flex-col gap-[13px]">
                    <div className="pricing flex gap-[11px] items-center">
                      <p className="text-[#C0BBBB] font-poppins font-medium text-base line-through"> {item.oldPrice} </p>
                      <p className="bg-[#0DB04B2B] px-[10px] py-[5px] rounded-[10px] line-through text-[#0DB04B]"> {item.discount} </p>
                    </div>
                    <p className="font-poppins font-bold text-[48px]"> <span> {item.newPrice} </span> <span className="font-semibold relative -left-3 text-[40px]">/</span> <span className="relative -left-6 font-normal text-2xl">yr</span> </p>
                  </div>
                </div>
                <button className="px-[83px] py-[18px] text-[#457BFF] font-poppins text-xl font-semibold border border-[#457BFF] rounded-[10px]">Register Now</button>
                <p className="absolute right-0 top-0 text-white"> {item.popular && <p className="flex gap-2 justify-between rounded-tr-[12px] bg-[#FF5D22] rounded-bl-[20px] p-2">Popular <img src={fire} alt="Fire" /></p>} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="extensions pb-16 bg-[#EFEFF1] flex flex-col items-center pt-[33px]">
          <h2 className="text-[#457BFF] font-poppins font-semibold text-[40px] text-center mb-[33px] max-w-[594px]">Think About These Popular Domain Extensions</h2>
          <div className="ext w-full rounded-[12px] flex flex-col pt-[60px] max-w-[1344px] bg-white items-center">
            <div className="search pl-[42px] rounded-full relative w-[80%] bg-[#F2F2F7]">
              <input type="text" className="w-full focus:outline-none pl-5 bg-transparent py-[27px]" placeholder="Search for domain" />
              <img className="absolute left-[42px] top-[32px]" src={search} alt="Search" />
            </div>
            <div className="row flex gap-[164px] pb-[51px] pt-[29px]">
              <p className="font-poppins font-normal text-base">Domain names</p>
              <p className="font-poppins font-normal text-base">Time</p>
              <p className="font-poppins font-normal text-base">Domain New Price</p>
              <p className="font-poppins font-normal text-base">Domain Transfer</p>
              <p className="font-poppins font-normal text-base">Domain Renewal</p>
            </div>
            <div className="row w-full flex flex-col items-center">
              {card.map((item, index) => (
                <div className="item px-[53px] justify-around py-[28px] flex w-full gap-[181px] odd:bg-[#F2F2F7]">
                  <p className="font-poppins text-[#457BFF] text-[32px] font-semibold"> {item.name} </p>
                  <p className="font-poppins font-medium text-xl"> 1yr </p>
                  <p className="font-poppins font-semibold text-2xl"> $13.99 </p>
                  <p className="font-poppins font-semibold text-2xl"> $13.99 </p>
                  <p className="font-poppins font-semibold text-2xl"> $13.99 </p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="info flex flex-col items-center">
        <h2 className="text-center font-poppins font-semibold text-[40px] mt-16 max-w-[695px]">Find helpful information, if you are new to domain names</h2>
        <div className="cards flex gap-[35px] flex-wrap justify-center mt-24">
          { info.map((item, index) => (
            <div key={index} className="info flex w-[432px] flex-col items-center bg-white px-6 pt-6 py-11">
              <img src={item.img} alt="Image" />
              <div className="text flex flex-col gap-[10px] text-center mt-9">
                <h2 className="font-poppins font-semibold text-2xl"> {item.header} </h2>
                <p className="font-poppins font-medium text-lg"> {item.paragraph} </p>
              </div>
            </div>
          )) }
        </div>
      </section>

      <section className="conn flex justify-around items-center">
        <div className="img w-fit relative">
          <img src={happy} className="w-full" alt="Man" />
          <img className="absolute -left-16 top-1/4" src={storage} alt="Storage" />
          <img className="absolute right-0 bottom-[18%]" src={ssl} alt="SSL" />
        </div>
        <div className="text">
          <p className="uppercase text-[#2A4AF4] font-raleway text-xl font-semibold pb-5">About host beta</p>
          <h1 className="font-poppins font-bold text-[60px] max-w-[573px] pb-3">The Perfect Digital Connection</h1>
          <p className="font-poppins font-medium text-base max-w-[551px] pb-6 text-[#9B9B9B]">Satisfaction is our priority, and we back it up with our guarantee. Pick any annual web hosting plan and get a free domain name for your website.</p>
          <div className="process flex flex-col gap-10">
            <div className="row flex gap-24">
              <p className="font-poppins font-semibold text-2xl text-[#457BFF]">Faster Process</p>
              <p className="font-poppins font-semibold text-2xl text-[#457BFF] text-left">Faster Delivery</p>
            </div>
            <div className="row flex gap-24 mb-[42px]">
              <p className="font-poppins font-semibold text-2xl text-[#457BFF]">Faster Access</p>
              <p className="font-poppins font-semibold text-2xl text-[#457BFF]">24/7 Full Support</p>
            </div>
          </div>
          <button type="submit" className="font-poppins font-semibold text-xl text-white bg-[#457BFF] px-5 py-4 rounded-full">Learn more</button>
        </div>
      </section>

      <section className="faq">
        <div className="header flex flex-col items-center gap-6 mb-16">
          <p className="bg-[#FF222240] px-6 py-[10px] rounded-full text-[#FF2222] font-poppins font-medium text-xl">Have questions?</p>
          <h2 className="font-poppins font-semibold text-[40px]">Domain Name Search FAQs</h2>
        </div>
        <div className="question flex flex-col gap-11 items-center">
          { question.map((item, index) => (
            <div className="que flex bg-white px-10 justify-between py-8 rounded-[30px] w-[1344px]" key={index}>
              <p className="font-poppins font-bold text-[29px] text-[#0A0B1E]"> {item.q} </p>
              <img src={cross} alt="Plus" />
            </div>
          )) }
        </div>
      </section>

      <section className="finalCTA flex justify-center mt-24">
        <div className="wrapper rounded-[32px] bg-[#457BFF] py-[117px] w-[1344px] flex flex-col items-center gap-5">
          <div className="txt flex flex-col gap-[14px] items-center">
            <p className="font-manrope font-bold text-[58px] text-white">Are you ready?</p>
            <p className="font-manrope font-medium text-2xl max-w-[811px] text-center text-white">Enjoy power, flexibility, and control for your sites with our Next-Generation Web Hosting.</p>
          </div>
          <div className="buttons flex gap-[21px]">
            <button className="font-poppins font-semibold text-xl bg-white px-5 py-[10px] rounded-full">Contact Us</button>
            <button className="bg-black text-white font-poppins font-semibold text-xl px-5 py-[10px] rounded-full">Register Now</button>
          </div>
        </div>
      </section>

      <footer className="bg-black flex justify-center gap-6 py-16 mt-24">
        <div className="col flex flex-col gap-4 pr-32">
          <p className="text-white font-inter font-semibold text-xs">Product</p>
          <ul className="flex flex-col gap-2">
            <li className="opacity-60 text-white font-inter font-normal text-xs">Store</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Developer</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Teams</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Pro <span className="border border-[#AB0052] rounded-[10px] px-[5px]">New</span></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">API Docs <img src={go} className="absolute left-[52px] -top-px" alt="Go to" /></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Pricing</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Changelog</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Manual <img src={go} alt="Go to" className="absolute left-[40px] -top-px"/></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative w-fit">Troubleshooting <img className="absolute -right-3 -top-px" src={go} alt="Go to" /></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">FAQ</li>
          </ul>
        </div>
        <div className="col flex flex-col gap-4 pr-32">
          <p className="text-white font-inter font-semibold text-xs">Company</p>
          <ul className="flex flex-col gap-2">
            <li className="opacity-60 text-white font-inter font-normal text-xs">Careers</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Manifesto</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Privacy Policy</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Terms of Service</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Data Process Agreement</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Press Kit <img src={go} className="absolute left-[52px] -top-px" alt="Go to" /></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Contact <img src={go} alt="Go to" className="absolute left-[43px] -top-px"/></li>
          </ul>
        </div>
        <div className="col flex flex-col gap-4 pr-32">
          <p className="text-white font-inter font-semibold text-xs">Community</p>
          <ul className="flex flex-col gap-2">
            <li className="opacity-60 text-white font-inter font-normal text-xs">Community Stories</li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Slack <img src={go} className="absolute left-[32px] -top-px" alt="Go to" /></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Twitter <img src={go} alt="Go to" className="absolute left-[43px] -top-px"/></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">GitHub <img src={go} alt="Go to" className="absolute left-[43px] -top-px"/></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Dribble <img src={go} alt="Go to" className="absolute left-[43px] -top-px"/></li>
          </ul>
        </div>
        <div className="col flex flex-col gap-4 pr-32">
          <p className="text-white font-inter font-semibold text-xs">By Raycast</p>
          <ul className="flex flex-col gap-2">
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Snippets <img src={go} className="absolute left-[52px] -top-px" alt="Go to" /></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Prompts <img src={go} alt="Go to" className="absolute left-[53px] -top-px"/></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">ray.so <img src={go} alt="Go to" className="absolute left-[43px] -top-px"/></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs relative">Icon Maker <img src={go} alt="Go to" className="absolute left-[63px] -top-px"/></li>
            <li className="opacity-60 text-white font-inter font-normal text-xs">Wallpapers</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App

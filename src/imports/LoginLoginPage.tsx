import svgPaths from "./svg-jcse6u6ts8";
import imgContainer from "figma:asset/8cba4942890a0eb03e08ebec0990a176bea26fba.png";

function Container() {
  return (
    <div className="h-[94px] relative shrink-0 w-[137px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[94px] w-[137px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[196.875px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[196.875px]">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[40px] left-[98.79px] text-[36px] text-center text-white top-0 translate-x-[-50%] w-[392.379px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          GaleGate
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[142.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[142.469px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[71.5px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Your Weather and Community Hub</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[196.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[72px] items-center relative w-[196.875px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[86px] relative shrink-0 w-[197px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[86px] items-center relative w-[197px]">
        <Container1 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-[329px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[329px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[4px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Email
        </p>
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Email Input">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Enter your email</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[16px] px-[20px] relative w-[329px]">
        <EmailInput />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-0 w-[329px]" data-name="Container">
      <Label />
      <Container3 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[329px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[329px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[4px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Password
        </p>
      </div>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="h-[24px] relative shrink-0 w-[267px]" data-name="Password Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center overflow-clip relative rounded-[inherit] w-[267px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Enter your password</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] w-[22px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-between px-[20px] py-0 relative w-[329px]">
        <PasswordInput />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-[108px] w-[329px]" data-name="Container">
      <Label1 />
      <Container6 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[20px] left-[216.45px] top-[220px] w-[112.547px]" data-name="Link">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-0 text-[#4fc3f7] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Forgot Password?
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[49.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[49.375px]">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] left-0 text-[18px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Log In
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#4fc3f7] box-border content-stretch flex h-[60px] items-center justify-center left-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[280px] w-[329px]" data-name="Button">
      <Text />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.2)] grow h-px min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-px w-full" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[19.656px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">OR</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-0 top-[372px] w-[329px]" data-name="Container">
      <Container8 />
      <Text1 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[416px] relative shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[416px] relative w-[329px]">
        <Container4 />
        <Container7 />
        <Link />
        <Button />
        <Container9 />
      </div>
    </div>
  );
}

function Google() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="google">
          <path d={svgPaths.p19264700} fill="var(--fill-0, white)" id="bg" />
          <path clipRule="evenodd" d={svgPaths.pdb3a00} fill="var(--fill-0, #4285F4)" fillRule="evenodd" id="google_2" />
          <path clipRule="evenodd" d={svgPaths.p14fa3e80} fill="var(--fill-0, #34A853)" fillRule="evenodd" id="google_3" />
          <path clipRule="evenodd" d={svgPaths.p14cc2780} fill="var(--fill-0, #FBBC05)" fillRule="evenodd" id="google_4" />
          <path clipRule="evenodd" d={svgPaths.p13504080} fill="var(--fill-0, #EA4335)" fillRule="evenodd" id="google_5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[58px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center p-px relative size-[58px]">
        <Google />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[17.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-[17.203px]" />
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute h-[38px] left-[calc(50%+0.602px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[39px]" data-name="facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 38">
        <g id="facebook">
          <path d={svgPaths.p2b0239c0} fill="var(--fill-0, #1877F2)" id="bg" />
          <path d={svgPaths.p1019d500} fill="var(--fill-0, white)" id="facebook_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(50%+0.602px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Facebook />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[58px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center justify-center p-px relative size-[58px]">
        <Text2 />
        <Group1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[58px] relative shrink-0 w-[132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[58px] items-start relative w-[132px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">{`Don't have an account?`}</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.734px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[47.734px]">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[20px] left-0 text-[#4fc3f7] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sign Up
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[207.266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[207.266px]">
        <Text3 />
        <Link1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[852px] items-center justify-between left-0 pb-[48px] pt-[96px] px-0 top-0 w-[393px]" data-name="Container">
      <Container />
      <Container2 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.28%] top-[3.42%]" data-name="Group">
      <div className="absolute bottom-[5.53%] left-0 right-[97.35%] top-[3.42%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p4495700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.13%_95.99%_19.29%_3.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path d={svgPaths.pc8f1a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_92.67%_7.69%_4.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p2744a380} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.59%_90.72%_7.69%_7.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 12">
          <path d={svgPaths.p16d8f680} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.46%_0.28%_29.07%_99.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path d={svgPaths.pb1b1b00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.38%_1.62%_15.38%_91.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
          <path d={svgPaths.p1cac8a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.69%_10.77%_1.28%_84.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p2f9f3840} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[79.17%] right-[19.91%] top-[23.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
          <path d={svgPaths.pe71fa80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[80.7%] right-[18.39%] top-[7.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 12">
          <path d={svgPaths.p3c2ec00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[77.65%] right-[21.43%] top-1/2" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path d={svgPaths.p1e958840} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[76.13%] right-[22.96%] top-[69.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p22835000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13px] items-start left-[33px] top-[18px] w-[327px]" data-name="StatusBar">
      <Icon />
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="h-[852px] overflow-clip relative shrink-0 w-full" data-name="LoginScreen">
      <Container13 />
      <StatusBar />
    </div>
  );
}

export default function LoginLoginPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Login - Login Page" style={{ backgroundImage: "linear-gradient(rgb(12, 43, 78) 50.481%, rgb(54, 83, 134) 100%), linear-gradient(rgb(12, 43, 78) 0%, rgba(54, 83, 134, 0.525) 100%)" }}>
      <LoginScreen />
    </div>
  );
}
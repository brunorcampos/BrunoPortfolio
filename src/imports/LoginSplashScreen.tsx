import svgPaths from "./svg-8szh448649";
import imgContainer from "figma:asset/8cba4942890a0eb03e08ebec0990a176bea26fba.png";
import imgLoginSplashScreen from "figma:asset/27b8bcbe83d9afd7dcd5a5aee6a4dd0465385793.png";

function Container() {
  return (
    <div className="h-[128px] relative shrink-0 w-[185.729px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[128px] w-[185.729px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[150px] relative rounded-[24px] shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[150px] items-center justify-center relative w-[256px]">
        <Container />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[47px] relative shrink-0 w-[329px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47px] relative w-[329px]">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold h-[100.473px] leading-[36px] left-[168.3px] text-[40px] text-center text-white top-[-28.47px] translate-x-[-50%] w-[265.32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Welcome to GaleGate
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[329px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[329px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[164.88px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-center top-0 tracking-[-0.3125px] translate-x-[-50%] w-[273px]">Your Weather and Community Hub</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[160px] items-center relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[448px] relative shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[448px] items-center relative w-[329px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#4fc3f7] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] w-[32px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[8px] relative shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[8px] items-start justify-center relative w-[329px]">
        <Container4 />
        {[...Array(2).keys()].map((_, i) => (
          <Container5 key={i} />
        ))}
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[331px]" data-name="Text">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] relative shrink-0 text-[18px] text-white w-[93px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get Started
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#4fc3f7] grow min-h-px min-w-px relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[331.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pl-0 pr-[238.344px] pt-[19px] relative w-[331.344px]">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[165.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[165.391px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Already have an account?</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.406px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[38.406px]">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[20px] left-0 text-[#4fc3f7] text-[14px] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Log In
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center justify-center pl-0 pr-[0.016px] py-0 relative w-[329px]">
        <Text1 />
        <Link />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[136px] relative shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[136px] items-start relative w-[329px]">
        <Container6 />
        <Button />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[852px] items-center justify-between left-0 pb-[48px] pt-[128px] px-0 top-0 w-[393px]" data-name="Container">
      <Container3 />
      <Container8 />
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

function Button1() {
  return (
    <div className="absolute h-[36px] left-[310.31px] top-[64px] w-[58.688px]" data-name="Button">
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[16px] text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Skip
      </p>
    </div>
  );
}

function WelcomeScreen() {
  return (
    <div className="bg-gradient-to-b from-[#0c2b4e] h-[852px] overflow-clip relative shrink-0 to-[rgba(54,83,134,0.525)] w-full" data-name="WelcomeScreen">
      <Container9 />
      <StatusBar />
      <Button1 />
    </div>
  );
}

export default function LoginSplashScreen() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Login - Splash Screen">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLoginSplashScreen} />
      <WelcomeScreen />
    </div>
  );
}
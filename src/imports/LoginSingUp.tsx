import svgPaths from "./svg-o5jfl96xfx";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] left-[132.89px] text-[20px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Create Account
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex h-[120px] items-center left-0 px-[24px] py-0 top-0 w-[393px]" data-name="Container">
      <Button />
      <Heading />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2dfdca80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.66667" />
          <path d={svgPaths.p171a9480} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.66667" />
          <path d="M16 4V20" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center left-0 p-[2px] rounded-[3.35544e+07px] size-[80px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Icon1 />
    </div>
  );
}

function FileUpload() {
  return <div className="absolute left-[-156.48px] size-0 top-[-136px]" data-name="File Upload" />;
}

function Label() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[80px]">
        <Container1 />
        <FileUpload />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[119.734px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[60px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-0 tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Upload a profile photo</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[132px] relative shrink-0 w-[119.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[132px] items-center pb-0 pt-[16px] px-0 relative w-[119.734px]">
        <Label />
        <Paragraph />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[329px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[329px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[4px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Full Name
        </p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Text Input">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Enter your full name</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[16px] px-[20px] relative w-[329px]">
        <TextInput />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-0 w-[329px]" data-name="Container">
      <Label1 />
      <Container3 />
    </div>
  );
}

function Label2() {
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

function Container5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[16px] px-[20px] relative w-[329px]">
        <EmailInput />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[100px] w-[329px]" data-name="Container">
      <Label2 />
      <Container5 />
    </div>
  );
}

function Label3() {
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
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Create a password</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-between px-[20px] py-0 relative w-[329px]">
        <PasswordInput />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-[200px] w-[329px]" data-name="Container">
      <Label3 />
      <Container7 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[329px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[329px]">
        <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] left-[4px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Confirm Password
        </p>
      </div>
    </div>
  );
}

function PasswordInput1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[267px]" data-name="Password Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-center overflow-clip relative rounded-[inherit] w-[267px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">Confirm your password</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] w-[22px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-between px-[20px] py-0 relative w-[329px]">
        <PasswordInput1 />
        <Container9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-0 top-[304px] w-[329px]" data-name="Container">
      <Label4 />
      <Container10 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[61.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[61.359px]">
        <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[28px] left-0 text-[18px] text-nowrap text-white top-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sign Up
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#4fc3f7] box-border content-stretch flex h-[60px] items-center justify-center left-0 pl-0 pr-[0.016px] py-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[430px] w-[329px]" data-name="Button">
      <Text />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[530px] relative shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[530px] relative w-[329px]">
        <Container4 />
        <Container6 />
        <Container8 />
        <Container11 />
        <Button1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
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

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[211.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[211.797px]">
        <Text1 />
        <Link />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#4fc3f7] relative rounded-[6px] shrink-0 size-[12px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[4px] size-[20px] top-[2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container14 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[78.39px] top-0 w-[110.703px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4fc3f7] text-[12px] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[216.84px] top-0 w-[78.422px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4fc3f7] text-[12px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[16px] left-[32px] top-0 w-[297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">I agree to the</p>
      <Text2 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[189.09px] not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">and</p>
      <Text3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[22px] relative shrink-0 w-[329px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[329px]">
        <Container15 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[732px] items-center justify-between left-0 pb-[32px] pt-0 px-0 top-[80px] w-[393px]" data-name="Container">
      <Container2 />
      <Container12 />
      <Container13 />
      <Container16 />
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

function Icon2() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13px] items-start left-[33px] top-[18px] w-[327px]" data-name="StatusBar">
      <Icon2 />
    </div>
  );
}

function SignUpScreen() {
  return (
    <div className="bg-gradient-to-b from-[#0c2b4e] from-[50.481%] h-[852px] overflow-clip relative shrink-0 to-[#365386] w-full" data-name="SignUpScreen">
      <Container />
      <Container17 />
      <StatusBar />
    </div>
  );
}

export default function LoginSingUp() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Login - Sing up">
      <SignUpScreen />
    </div>
  );
}
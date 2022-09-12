let clockSetup = () => {
  let clock = document.getElementsByClassName("clock-wrapper")[0],
    weekday = new Date().toLocaleDateString("en-US", {
      weekday: "short",
    }),
    hour = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: false,
    }),
    minute = new Date().toLocaleTimeString("en-US", {
      minute: "2-digit",
    }),
    second = new Date().toLocaleTimeString("en-US", {
      second: "2-digit",
    }),
    clockLayout = `
<div class='clock gap-3 flex justify-evenly	items-center w-full'>
    <div class='day relative basis-1/4 flex items-center flex-col'>
        <span>${weekday}</span>
        <span class='text-[8px] text-slate-400 uppercase'>day</span>
        <span id='day-progress' class='bg-white h-px transition-all	duration-300'></span>
    </div>
    <div class='hour relative basis-1/4 flex items-center flex-col'>
        <span>${hour}</span>
        <span class='text-[8px] text-slate-400 uppercase'>hr</span>
        <span id='hour-progress' class='bg-white h-px transition-all	duration-300'></span>
    </div>
    <div class='minute relative basis-1/4 flex items-center flex-col'>
        <span>${minute}</span>
        <span class='text-[8px] text-slate-400 uppercase'>min</span>
        <span id='minute-progress' class='bg-white h-px transition-all	duration-300'></span>
    </div>
    <div class='second relative basis-1/4 flex items-center flex-col'>
        <span>${second}</span>
        <span class='text-[8px] text-slate-400 uppercase'>sec</span>
        <span id='second-progress' class='bg-white h-px transition-all	duration-300'></span>
    </div>
</div>
`;
  clock.innerHTML = clockLayout;
  document.getElementById('day-progress').style.width =  `${new Date().getHours() * 4.167}%`;
  document.getElementById('hour-progress').style.width =  `${(new Date().getMinutes() * 1.667) }%`;
  document.getElementById('minute-progress').style.width =  `${(new Date().getSeconds() * 10) / 6}%`;
  document.getElementById('second-progress').style.width =  `${new Date().getMilliseconds() / 10}%`;
};
setInterval(() => {
  clockSetup();
}, 1);

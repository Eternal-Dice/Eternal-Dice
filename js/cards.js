const CARDS = {
    f1_1: [
        "Nothing",
        x=>`Kills your favorite anime characters`,
        x=>data.round<10,
        x=>{},
    ],
    f1_2: [
        "Nothinger",
        x=>`It's too late to run...`,
        x=>data.round>=10&&data.round<30,
        x=>{},
    ],
    f1_3: [
        "Nothingest",
        x=>`CONSOLE: IP successfully sent to Democratic Republic of Korea`,
        x=>data.round>=30,
        x=>{},
    ],
    f2_1: [
        "Energy",
        x=>`Increase ${['your',"enemy's"][x]} max energy by <span class="green">+2</span>`,
        x=>data[x].maxEnergy<=20,
        x=>{data[x].maxEnergy+=2},
    ],
    f2_2: [
        "More Energy",
        x=>`Increase ${['your',"enemy's"][x]} max energy by <span class="green">+3</span>`,
        x=>data[x].maxEnergy>20&&data[x].maxEnergy<=50,
        x=>{data[x].maxEnergy+=3},
    ],
    f2_3: [
        "Even More Energy",
        x=>`Increase ${['your',"enemy's"][x]} max energy by <span class="green">+5</span>`,
        x=>data[x].maxEnergy>=30,
        x=>{data[x].maxEnergy+=5},
    ],
    f3_1: [
        "Minimum Incrementer",
        x=>`Increase ${['your',"enemy's"][x]} minimum of side by <span class="green">+1</span>`,
        x=>data[x].min_s<data[x].max_s&&data[x].min_s<10,
        x=>{data[x].min_s+=1},
    ],
    f3_2: [
        "Minimum Increaser",
        x=>`Increase ${['your',"enemy's"][x]} minimum of side by <span class="green">+2</span>`,
        x=>data[x].min_s<data[x].max_s&&data[x].min_s>=5&&data[x].min_s<35,
        x=>{data[x].min_s+=2},
    ],
    f3_3: [
        "Minimum Increaser+",
        x=>`Increase ${['your',"enemy's"][x]} minimum of side by <span class="green">+3</span>`,
        x=>data[x].min_s<data[x].max_s&&data[x].min_s>=30,
        x=>{data[x].min_s+=3},
    ],
    f4_1: [
        "Maximum Incrementer",
        x=>`Increase ${['your',"enemy's"][x]} maximum of side by <span class="green">+1</span>`,
        x=>data[x].max_s<12,
        x=>{data[x].max_s+=1},
    ],
    f4_2: [
        "Maximum Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum of side by <span class="green">+2</span>`,
        x=>data[x].max_s>=8&&data[x].max_s<35,
        x=>{data[x].max_s+=2},
    ],
    f4_3: [
        "Maximum Increaser+",
        x=>`Increase ${['your',"enemy's"][x]} maximum of side by <span class="green">+3</span>`,
        x=>data[x].max_s>=30,
        x=>{data[x].max_s+=3},
    ],
}

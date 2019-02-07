// URL: https://beta.observablehq.com/d/a94651ff4bb1a056
// Title: Osallistujien j‰rjest‰minen tapahtumiin halukkuuksien mukaan
// Author: Olli-Pekka Tikkanen (@altesmi)
// Version: 631
// Runtime version: 1

const m0 = {
  id: "a94651ff4bb1a056@631",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Osallistujien j‰rjest‰minen tapahtumiin halukkuuksien mukaan`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Input optimointiin`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`M‰‰rit‰ osallistuvien optimoinnissa k‰ytett‰v‰t parametrit. Ryhmien koko arvotaan satunnaisesti ykkˆsen ja asetetun arvon v‰lill‰. V‰hint‰‰n asetettu prosenttiosuuden verran ryhmist‰ saa koon '1'. Tapahtumat joihin ryhm‰ haluaa menn‰ ja niiden lukum‰‰r‰ arvotaan satunnaisesti ykkˆsen ja asetetun arvon v‰lilt‰.`
)})
    },
    {
      name: "viewof numOsallistujat",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 1000,
  step: 1,
  title: "?? Osallistuvien ryhmien lukum‰‰r‰",
  value: 50
})
)})
    },
    {
      name: "numOsallistujat",
      inputs: ["Generators","viewof numOsallistujat"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof maxRyhma",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 6,
  step: 1,
  title: "???????? Ryhm‰n maksimikoko",
  value: 5
})
)})
    },
    {
      name: "maxRyhma",
      inputs: ["Generators","viewof maxRyhma"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof percentGroupsizeIsOne",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 0, 
  max: 1, 
  step: 0.01, 
  format: ".0%",
  title: 'Kuinka monta prosenttia ryhmist‰ asetetaan yhden henkilˆn kokoisiksi pakosti'
})
)})
    },
    {
      name: "percentGroupsizeIsOne",
      inputs: ["Generators","viewof percentGroupsizeIsOne"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof numTapahtumat",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 5,
  max: 300,
  step: 1,
  title: "?? Tapahtumien lukum‰‰r‰",
  value: 30
})
)})
    },
    {
      name: "numTapahtumat",
      inputs: ["Generators","viewof numTapahtumat"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof minTapahtuma",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 3,
  step: 1,
  title: "Tapahtumien miniosallistujam‰‰r‰",
  value:2
})
)})
    },
    {
      name: "minTapahtuma",
      inputs: ["Generators","viewof minTapahtuma"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof maxTapahtuma",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 2,
  max: 7,
  step: 1,
  title: "Tapahtumien maksimiosallistuajm‰‰r‰",
  value: 6,
})
)})
    },
    {
      name: "maxTapahtuma",
      inputs: ["Generators","viewof maxTapahtuma"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof numHalukkuus",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 5,
  step: 1,
  title: "Kuinka monta tapahtumaa osallistuja voi valita"
})
)})
    },
    {
      name: "numHalukkuus",
      inputs: ["Generators","viewof numHalukkuus"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["events","groups"],
      value: (function(events,groups){return(
`${events.reduce((tot,ele)=> ele.max+tot,0)} paikkaa peliin ${groups.reduce((tot,ele)=>ele.size+tot,0)} pelaajalle`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Optimoinnnin tulokset`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `### PADG`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `Kokonaisonnellisuus uudella algortimilla (PADG) (jos jokainen asetetaan omaan ykkˆsvalintaansa onnellisuus on 100%)`
)})
    },
    {
      inputs: ["totalHappiness","arrangement","groups","numOsallistujat"],
      value: (function(totalHappiness,arrangement,groups,numOsallistujat){return(
`${Math.round(totalHappiness(arrangement,groups)/numOsallistujat * 10000)/100}%`
)})
    },
    {
      inputs: ["md","arrangement","numOsallistujat"],
      value: (function(md,arrangement,numOsallistujat){return(
md `${arrangement.filter(ele => ele.assignment===-1).length} (${Math.round(arrangement.filter(ele => ele.assignment===-1).length/numOsallistujat*10000)/100}%) ryhm‰‰ j‰i ilman paikkaa`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md ``
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Optimointialgoritmit`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `Optimoinnin tavoitteena on maksimoida listassa ***L*** oleva tyytyv‰isyys`
)})
    },
    {
      name: "arrangement",
      inputs: ["PADGopt","L","events","groups"],
      value: (function(PADGopt,L,events,groups){return(
PADGopt(L,events,groups)
)})
    },
    {
      inputs: ["arrangement","groups"],
      value: (function(arrangement,groups)
{
  for(let i=0;i<1;i++) {
    let notAssigned = arrangement.filter(ele => ele.assignment === -1)
    let newGroups = []
    for(let notAssignedInd in notAssigned) {
        newGroups.push(groups.find(ele => ele.name === notAssigned[notAssignedInd].name))
    }
  }
  
  return `T‰h‰n silmukka, miss‰ PADG ajetaan muutaman kerran ylij‰‰neille ryhmille`
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `PADGopt (phantom aware dynamic greedy) on algoritmi, joka yritt‰‰ asettaa listasta L aina sen elementin joka tuottaisi maksimim‰‰r‰n onnellisuutta. Siin‰ on kuitenkin erillinen deficit-termi, joka est‰‰ suuren m‰‰r‰n haamueventtien luomisen. Haamueventti on eventti johon jokin ryhm‰ tai jotkin ryhm‰t haluaisivat, mutta heid‰n yhteenlaskettu m‰‰r‰ ei riit‰ saamaan eventti‰ tapahtumaan`
)})
    },
    {
      name: "PADGopt",
      value: (function(){return(
(L,evnt,grp) => {
  //copy arrays with slice() so that the original data is not changed
  let LL = L.slice()
  let M = grp.map(e => {
    return {name: e.name,assignment: -1}
  })
  let S = evnt.map(e => { // real events
    return {name: e.name,
            min: e.min,
            max: e.max,
            groups: []
           }
  })
  // function definitions for S

  S.playerCount = (e) => {
    // function to count how many players are already assigned to an event
    if(S[e].groups.length > 0) {
      return S[e].groups.reduce((a, b) => {
        return a+grp.filter(g=>g.name === b)[0].size
      }, 0);
    } else {
      return 0
    }

  }

  let P = [] // Phantom events
  // function definitions for P
  P.createEntry = (newEntry) => {
    //function to create a new entry to S
    P.push({name: newEntry.name, 
            min: newEntry.min, 
            max: newEntry.max, 
            groups: []
           })
  }

  P.removeEntry = (eventName) => {
    P.filter(ele => ele.name !== eventName)
  }

  P.includes = (eventName) => {
    //check if event named eventName is in P
    if(P.filter(ele => ele.name === eventName).length === 1) {
      return 1
    } else {
      return 0
    }
  }

  //define deficit

  let deficit = 0

  //initialize V to be the same as groups
  let V = grp.slice()
  
  //MAIN LOOP STARTS HERE
  while(LL.length>0) {
    let u = LL.pop() // u is the last index of LL
    if(u.gain === 0) {
      // consider only cases where adding u to event increases happiness
      continue
    }
      let Mind = M.findIndex(g => g.name === u.name)

      if(M[Mind].assignment === -1 && (S.playerCount(u.event) + u.size) <= evnt[u.event].max) {
        // user u is not assigned and there is space in the event where we try to place u

        if(S.playerCount(u.event) === 0) {
          //no players in S or S is not yet a real event
          if( deficit + (evnt[u.event].min - u.size) < V.length) {
            // adding u to this event does not decrease deficit over critical size
            // since event is not in S add it to P
            
            // add to deficit how much space was left over in this event
            deficit = deficit + (evnt[u.event].min - u.size) 
            
            let newPEntry = {
              name: evnt[u.event].name,
              min: evnt[u.event].min,
              max: evnt[u.event].max,
            }
            P.createEntry(newPEntry)
          } else {
            continue
          }
          } else {
            // S has players and is happening anyway
            if(P.includes(evnt[u.event].name) === 1) {
              deficit = deficit - u.size
            }

          }

          S[u.event].groups.push(u.name)
          V = V.filter(ele => ele.name !== u.name)
          if(S.playerCount(u.event) > evnt[u.event].min && P.includes(evnt[u.event].name) === 0) {
            // this event is not a phantom event, set M(u) to a
            M[Mind] = u.event
            // remove u from other events
            S.forEach(ele => {
              ele.groups.filter(e=> e.name !== u.name)
            })
          }

          if(S.playerCount(u.event) >= evnt[u.event].min && P.includes(evnt[u.event].name) === 1) {
            // this event is a phantom event but has no enough players to be a real event
            P.removeEntry(evnt[u.event].name) // remove this event from phantom events
            S[u.event].groups.forEach(el => {
              let MindTemp = M.findIndex(m => m.name === el)
              M[MindTemp].assignment = u.event
            })
            for(let g in S[u.event].groups) {
              S.forEach(ele => {
                ele.groups.filter(e => e.name !== S[u.event].groups[g])
              })
            }
          }
        }

      }

      return M
    }
)})
    },
    {
      name: "randomOpt",
      inputs: ["L"],
      value: (function(L){return(
(evnt,grp) => {
  let LL = L.slice()
  let M = grp.map(e => {
    return {name: e.name,assignment: -1}
  })
  return 0
}
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Generoidaan optimoitava data`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `***L*** on lista, miss‰ on jokaisen ryhm‰n jokaiseen tapahtumaan lis‰‰misest‰ saatava tyytyv‰isyys`
)})
    },
    {
      name: "L",
      inputs: ["numOsallistujat","numTapahtumat","groups"],
      value: (function(numOsallistujat,numTapahtumat,groups)
{
  let L = []
  for(let i=0;i<numOsallistujat;i++) {
    for(let j=0;j<numTapahtumat;j++) {
      let ind = groups[i].pref.indexOf(j)
      let gain = 0
      if(ind!== -1) {
        gain = 1/(ind+1)
      }
      L.push({
        name: groups[i].name,
        event: j,
        size: groups[i].size,
        gain: gain    
     })
    }
  }
  return L.sort((a,b) => a.gain - b.gain)
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` ***groups*** on taulukko, jossa on henkilˆiden nimet ja halukkuudet osallistua mihinkin tapahtumaan`
)})
    },
    {
      name: "groups",
      inputs: ["names","randInt","maxRyhma","percentGroupsizeIsOne","events","numHalukkuus"],
      value: (function(names,randInt,maxRyhma,percentGroupsizeIsOne,events,numHalukkuus){return(
names.map(nimi => {
  let groupSize = randInt(maxRyhma,1)
  //This is to set 66% of the groups to of size one
  if(Math.random() > (1-percentGroupsizeIsOne)) {
    groupSize = 1
  }
  //console.log(groupSize)
  let p = []
  let stopCond = 0
  let possibleEvents = events.filter(ele => ele.max >= groupSize)
  //console.log(possibleEvents.length)
  //console.log(numHalukkuus)
  if(possibleEvents.length === 0) {
    p = [] // empty array
  } else if(possibleEvents.length === 1) {
    p = events.findIndex(ele => ele.name === possibleEvents.name)
  } else if(possibleEvents.length < numHalukkuus) {
    //choose how many events the group wants to go
    let numToGo = randInt(possibleEvents.length,1)
    //Sort array of possible events randomly and choose the correct index
    let randomEvents = possibleEvents.sort((a,b)=>0.5-Math.random())
    .slice(0,numToGo)
    //push randomEvents as indexex to p
    randomEvents.forEach(ele => {
      p.push(events.findIndex(e=>e.name===ele.name))
    })                   
  } else { // there is at least numHalukkuus places, draw integers randomly
    let numToGo = randInt(numHalukkuus,1)
    let randomEvents = possibleEvents.sort((a,b)=>0.5-Math.random())
    .slice(0,numToGo)
    //push randomEvents as indexex to p
    randomEvents.forEach(ele => {
      p.push(events.findIndex(e=>e.name===ele.name))
    })                   
  }
  //This is to check that everything went well in the preference assignment
  //i.e. no group wants to go to an event whose max number of players is smaller than
  // the group's size
  p.forEach(ele => {
    //console.log(events[ele])
    //console.log(groupSize)
    if(events[ele].max < groupSize) {
      stopCond = 0
    }
  })
  return {
    name: nimi,
    pref: p,
    size: groupSize
  }
})
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `***events*** on taulukko, jossa on tapahtuman nimi ja minimi ja maksimim‰‰r‰ osallistujia`
)})
    },
    {
      name: "events",
      inputs: ["numTapahtumat","randInt","minTapahtuma","maxTapahtuma"],
      value: (function(numTapahtumat,randInt,minTapahtuma,maxTapahtuma)
{
  let events = []
  for(let i=0;i<numTapahtumat;i++) {
    let minOsallistujat = randInt(minTapahtuma,1);
    let maxOsallistujat = minOsallistujat
    while(maxOsallistujat <= minOsallistujat) {
      maxOsallistujat = randInt(maxTapahtuma,1)
    }
    events.push({
      name: `tapahtuma${i+1}`,
      min: minOsallistujat,
      max: maxOsallistujat
    })
  }
  return events
}
)
    },
    {
      name: "randInt",
      value: (function(){return(
(val,num) => {
  //Returns random integer between 1 and val
  //'num' times. duplicate values are not allowed
  if(num===1) {
    return Math.floor(Math.random()*val+1)
  } else {
  let randints = []
  for(let i=0;i<num;i++) {
    let u = Math.floor(Math.random()*val+1)
    if(randints.filter(el => el === u).length>0) {
      i = i-1
      continue
    }
    randints.push(u)
  }
  return randints
  }
}
)})
    },
    {
      name: "totalHappiness",
      value: (function(){return(
(M,grp) => {
  let happiness = 0
  M.forEach(m => {
    let grpInd = grp.findIndex(g=>g.name === m.name)
    let ind = grp[grpInd].pref.findIndex(ele => {
      return ele === m.assignment
    })
    ind = ind +1
    if(ind > 0) {
      happiness = happiness + 1/ind
    }
  })
  return happiness
}
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Importit ja api kutsut`
)})
    },
    {
      name: "names",
      inputs: ["persons"],
      value: (function(persons){return(
persons.results.map(user => user.login.username)
)})
    },
    {
      name: "persons",
      inputs: ["d3","numOsallistujat"],
      value: (function(d3,numOsallistujat){return(
d3.json(`https://randomuser.me/api/?results=${numOsallistujat}`)
)})
    },
    {
      from: "@jashkenas/inputs",
      name: "slider",
      remote: "slider"
    },
    {
      from: "@jashkenas/inputs",
      name: "button",
      remote: "button"
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require('d3')
)})
    },
    {
      name: "vegalite",
      inputs: ["require"],
      value: (function(require){return(
require('vega-lite')
)})
    }
  ]
};

const m1 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "slider",
      inputs: ["input"],
      value: (function(input){return(
function slider(config = {}) {
  let {value, min = 0, max = 1, step = "any", precision = 2, title, description, getValue, format, display, submit} = config;
  if (typeof config == "number") value = config;
  if (value == null) value = (max + min) / 2;
  precision = Math.pow(10, precision);
  if (!getValue) getValue = input => Math.round(input.valueAsNumber * precision) / precision;
  return input({
    type: "range", title, description, submit, format, display,
    attributes: {min, max, step, value},
    getValue
  });
}
)})
    },
    {
      name: "button",
      inputs: ["input"],
      value: (function(input){return(
function button(config = {}) {
  let {value, title, description, disabled} = config;
  if (typeof config == "string") value = config;
  if (!value) value = "Ok";
  const form = input({
    type: "button", title, description,
    attributes: {disabled, value}
  });
  form.output.remove();
  return form;
}
)})
    },
    {
      name: "input",
      inputs: ["html","d3format"],
      value: (function(html,d3format){return(
function input(config) {
  let {
    form,
    type = "text",
    attributes = {},
    action,
    getValue,
    title,
    description,
    format,
    display,
    submit,
    options
  } = config;
  if (!form)
    form = html`<form>
	<input name=input type=${type} />
  </form>`;
  const input = form.input;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) input.setAttribute(key, val);
  });
  if (submit)
    form.append(
      html`<input name=submit type=submit style="margin: 0 0.75em" value="${
        typeof submit == "string" ? submit : "Submit"
      }" />`
    );
  form.append(
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`
  );
  if (title)
    form.prepend(
      html`<div style="font: 700 0.9rem sans-serif;">${title}</div>`
    );
  if (description)
    form.append(
      html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`
    );
  if (format) format = d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit
      ? "onsubmit"
      : type == "button"
        ? "onclick"
        : type == "checkbox" || type == "radio"
          ? "onchange"
          : "oninput";
    form[verb] = e => {
      e && e.preventDefault();
      const value = getValue ? getValue(input) : input.value;
      if (form.output)
        form.output.value = display
          ? display(value)
          : format
            ? format(value)
            : value;
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      input.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  return form;
}
)})
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: (function(require){return(
require("d3-format")
)})
    }
  ]
};

const notebook = {
  id: "a94651ff4bb1a056@631",
  modules: [m0,m1]
};

export default notebook;
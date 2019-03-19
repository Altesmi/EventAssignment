// URL: https://observablehq.com/@altesmi/event-assignment-with-real-data
// Title: Event assignment with real data
// Author: Olli-Pekka Tikkanen (@altesmi)
// Version: 290
// Runtime version: 1

const m0 = {
  id: "48eb1ef569406ca2@290",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Event assignment with real data`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Select data`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `** Year **`
)})
    },
    {
      name: "viewof selectedYear",
      inputs: ["select"],
      value: (function(select){return(
select([2017,2018])
)})
    },
    {
      name: "selectedYear",
      inputs: ["Generators","viewof selectedYear"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `** Start time of games **`
)})
    },
    {
      name: "viewof selectedGame",
      inputs: ["select","gameTimes"],
      value: (function(select,gameTimes){return(
select(gameTimes.map(time => new Date(time).toString().slice(0,24)))
)})
    },
    {
      name: "selectedGame",
      inputs: ["Generators","viewof selectedGame"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Optimization results`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `*Total happiness equals 100% if every group is placed to their first choice*`
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
md `** Total happiness **`
)})
    },
    {
      inputs: ["totalHappiness","arrPADG","groups"],
      value: (function(totalHappiness,arrPADG,groups){return(
`${Math.round(totalHappiness(arrPADG,groups)/groups.length * 10000)/100}%`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `** How many groups are not assigned **`
)})
    },
    {
      inputs: ["md","arrPADG","groups"],
      value: (function(md,arrPADG,groups){return(
md `${arrPADG.filter(ele => ele.assignment===-1).length} (${Math.round(arrPADG.filter(ele => ele.assignment===-1).length/groups.length*10000)/100}%)`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `### Random arrangement`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `** Total happiness **`
)})
    },
    {
      inputs: ["totalHappiness","arrRandom","groups"],
      value: (function(totalHappiness,arrRandom,groups){return(
`${Math.round(totalHappiness(arrRandom,groups)/groups.length * 10000)/100}%`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `** How many groups are not assigned **`
)})
    },
    {
      inputs: ["md","arrRandom","groups"],
      value: (function(md,arrRandom,groups){return(
md `${arrRandom.filter(ele => ele.assignment===-1).length} (${Math.round(arrRandom.filter(ele => ele.assignment===-1).length/groups.length*10000)/100}%)`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md ` ### Algorithm comparison`
)})
    },
    {
      inputs: ["totalHappiness","arrPADG","groups","arrRandom"],
      value: (function(totalHappiness,arrPADG,groups,arrRandom){return(
`PADG on ${Math.round((totalHappiness(arrPADG,groups)/totalHappiness(arrRandom,groups)-1)*10000)/100} % parempi (negativinen luku tarkoittaa huonompaa)`
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
md `## Run optimization`
)})
    },
    {
      name: "arrPADG",
      inputs: ["runPADGMultipleTimes","L","events","groups"],
      value: (function(runPADGMultipleTimes,L,events,groups){return(
runPADGMultipleTimes(L,events,groups)
)})
    },
    {
      inputs: ["checkArrangement","arrPADG","groups","events"],
      value: (function(checkArrangement,arrPADG,groups,events){return(
checkArrangement(arrPADG, groups, events) ? 'PADGopt tuottaa hyväksytyn sijoituksen' : 'PADGopt ei tuota hyväksyttyä sijoitusta'
)})
    },
    {
      name: "arrRandom",
      inputs: ["randomOpt","events","groups","totalHappiness"],
      value: (function(randomOpt,events,groups,totalHappiness)
{ 
 let randomArrangement = randomOpt(events,groups)
 let randomhappiness = totalHappiness(randomArrangement,groups)/groups.length
 let newRandomArrangement = []
 let newRandomhappiness = 0
 //try the random arrangement 100 times to see if there are better matches
 for(let i=0;i<1000;i++) {
   newRandomArrangement = randomOpt(events,groups)
   newRandomhappiness = totalHappiness(newRandomArrangement,groups)/groups.length
   if(newRandomhappiness > randomhappiness) {
     randomhappiness = newRandomhappiness
     randomArrangement = newRandomArrangement
   }
 }
  return randomArrangement
}
)
    },
    {
      inputs: ["checkArrangement","arrRandom","groups","events"],
      value: (function(checkArrangement,arrRandom,groups,events){return(
checkArrangement(arrRandom, groups,events) ? 'RandomArrangement tuottaa hyväksytyn sijoituksen' : 'RandomArrangement ei tuota hyväksyttyä sijoitusta'
)})
    },
    {
      name: "runPADGMultipleTimes",
      inputs: ["PADGopt","L","totalHappiness","groups"],
      value: (function(PADGopt,L,totalHappiness,groups){return(
function runPADGMultipleTimes(LL,evnts,grps) {
  let arrangement = PADGopt(L,evnts,grps,grps)
  let happiness = totalHappiness(arrangement,groups)/groups.length
  let grp = grps.slice()
  let numOptRounds = 5
  for(let round = 1; round < numOptRounds; round++) {
    //find groups that were not set to any event
    let groupsNotAssigned = arrangement.filter(ele => ele.assignment === -1)
    let newGroups = []
    for(let g in groupsNotAssigned){  
      newGroups.push(groups.filter(ele => ele.name === groupsNotAssigned[g].name)[0])
    }

    //update new events so that the groups already assigned to them are included
    let newEvents = evnts.map(ele => {
      return {
        name: ele.name,
        min: ele.min,
        max: ele.max,
      }
    })

    newEvents.playerCount = (eventName) => {
      // function to count how many players are already assigned to an event   
      let e = newEvents.findIndex(ele => {
        return ele.name === eventName })
      if(typeof(newEvents[e].groups) !== 'undefined' && newEvents[e].groups.length > 0) {

        return newEvents[e].groups.reduce((a, b) => {
          return a+grp.filter(g=>g.name === b)[0].size
        }, 0);
      } else {
        return 0
      }

    }

    for(let e in newEvents) {
      let playersInThisEvent = arrangement.filter(ele=>ele.assignment === Number(e))
                            .map(ele => ele.name)
      if(playersInThisEvent.length>0) {
        newEvents[e].groups = playersInThisEvent
      }
    }
    //console.log(newEvents)
    //construct new L which includes only gain from assigning groups in newGroups
    let newL = []
    for(let i=0;i<newGroups.length;i++) {
      for(let j=0;j<evnts.length;j++) {
        let ind = newGroups[i].pref.indexOf(j)
        let gain = 0
        if(ind!== -1) {
          gain = 1/(ind+1)
        }
        newL.push({
          name: newGroups[i].name,
          event: j,
          size: newGroups[i].size,
          gain: gain    
       })
      }
    }
    newL = newL.sort((a,b) => a.gain - b.gain)
    //console.log(newEvents)
    let newArrangement = PADGopt(newL,newEvents,newGroups,grps)
    newArrangement.map(ele => {
      if(ele.assignment !== -1) {
        let arrInd = arrangement.findIndex(arrEle => arrEle.name === ele.name)
        arrangement[arrInd].assignment = ele.assignment
        console.log(ele)
        console.log('we did it')
      }
    })
  }
  //Check that the arrangement is ok (ie every event has no more than max amount of participants and there are no 
  //event assignments to events where minimum number of players is not reached
  
  
  
  return arrangement
}
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Parse the raw data to right format for the algorithms`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `### Select one gametime and get all the events and groups attending`
)})
    },
    {
      name: "L",
      inputs: ["groups","events"],
      value: (function(groups,events)
{
  let L = []
  for(let i=0;i<groups.length;i++) {
    for(let j=0;j<events.length;j++) {
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
      name: "groups",
      inputs: ["users","games","selectedGameTime","events"],
      value: (function(users,games,selectedGameTime,events)
{
 let u = JSON.parse(JSON.stringify(users))
 let gr = u.filter(ele => {
    let isAttending = false
    for (let signedGame in ele.signedGames) {
      //include the time for 2017 data
      if(!ele.signedGames[signedGame].hasOwnProperty('time')) {
        ele.signedGames[signedGame].time = games
          .filter(game => game.id === ele.signedGames[signedGame].id)[0].startTime
       console.log(ele.signedGames[signedGame])
      }
      if (ele.signedGames[signedGame].time === selectedGameTime) {
        isAttending = true
      }
    }
    return isAttending
  }).map(ele => {
    // map only the event that we are searching for
    //console.log(ele)
    let signedGame = ele.signedGames.filter(elesigned => {    
      return elesigned.time === selectedGameTime
    })      
    let prefArr = []
    signedGame.forEach(elesigned => {
      prefArr.push(events.findIndex(ele => {
        
        return ele.id === elesigned.id
      
      }))
    })
    
    return {
      name: ele.username,
      playerGroup: ele.hasOwnProperty('playerGroup') ? ele.playerGroup : "0",
      pref: prefArr,              
    }
  })
 
    //calculate size of the group
    let sizes = {};
    gr.forEach(ele => {
      sizes[ele.playerGroup] = (sizes[ele.playerGroup] || 0) +1
    })
    // add size to every group
    gr = gr.map(ele => {
      return {
        ... ele,
        size: ele.playerGroup === "0" ? 1 : sizes[ele.playerGroup]
        
      }
      
      
    })
  
  // take only unique playergroups
  const result = [];
  const map = new Map();
  for (const group of gr) {
      if(!map.has(group.playerGroup) || group.playerGroup === "0"){
          map.set(group.playerGroup, true);    // set any value to Map
          result.push({
              name: group.name,
              playerGroup: group.playerGroup,
              pref: group.pref,
              size: group.size
          });
      }
  }
  
  return result
}
)
    },
    {
      name: "events",
      inputs: ["games","selectedGameTime"],
      value: (function(games,selectedGameTime)
{
  return games.filter(ele =>   ele.startTime === selectedGameTime)
          .map(ele => {
            return {
              name: ele.title,
              id: ele.id,
              min: Number(ele.minAttendance),
              max: Number(ele.maxAttendance) 
            }
              
          })
}
)
    },
    {
      name: "selectedGameTime",
      inputs: ["gameTimes","selectedGame"],
      value: (function(gameTimes,selectedGame){return(
gameTimes.find(time => new Date(time).toString() === new Date(selectedGame).toString())
)})
    },
    {
      name: "gameTimes",
      inputs: ["games"],
      value: (function(games){return(
games.map(ele => ele.startTime).filter((v,i,a) => a.indexOf(v) === i)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Load the data`
)})
    },
    {
      name: "oneGroup",
      inputs: ["users"],
      value: (function(users){return(
users.filter(ele => ele.playerGroup === '9464669226')
)})
    },
    {
      name: "games",
      inputs: ["selectedYear","d3"],
      value: (function(selectedYear,d3)
{
  let correctUrl = `https://raw.githubusercontent.com/Archinowsk/konsti-server/master/src/statistics/datafiles/${Number(selectedYear)}/games.json`
  return d3.json(correctUrl)
}
)
    },
    {
      name: "users",
      inputs: ["d3","selectedYear"],
      value: (function(d3,selectedYear){return(
d3.json(`https://raw.githubusercontent.com/Archinowsk/konsti-server/master/src/statistics/datafiles/${Number(selectedYear)}/users.json`)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `## Imports`
)})
    },
    {
      from: "@jashkenas/inputs",
      name: "select",
      remote: "select"
    },
    {
      from: "@altesmi/event-assignment",
      name: "PADGopt",
      remote: "PADGopt"
    },
    {
      from: "@altesmi/event-assignment",
      name: "randomArrangement",
      remote: "randomArrangement"
    },
    {
      from: "@altesmi/event-assignment",
      name: "randomOpt",
      remote: "randomOpt"
    },
    {
      from: "@altesmi/event-assignment",
      name: "checkArrangement",
      remote: "checkArrangement"
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require('d3')
)})
    }
  ]
};

const m1 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "select",
      inputs: ["input","html"],
      value: (function(input,html){return(
function select(config = {}) {
  let {
    value: formValue,
    title,
    description,
    submit,
    multiple,
    size,
    options
  } = config;
  if (Array.isArray(config)) options = config;
  options = options.map(
    o => (typeof o === "object" ? o : { value: o, label: o })
  );
  const form = input({
    type: "select",
    title,
    description,
    submit,
    getValue: input => {
      const selected = Array.prototype.filter
        .call(input.options, i => i.selected)
        .map(i => i.value);
      return multiple ? selected : selected[0];
    },
    form: html`
      <form>
        <select name="input" ${
          multiple ? `multiple size="${size || options.length}"` : ""
        }>
          ${options.map(({ value, label }) => Object.assign(html`<option>`, {
              value,
              selected: Array.isArray(formValue)
                ? formValue.includes(value)
                : formValue === value,
              textContent: label
            }))}
        </select>
      </form>
    `
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
require("d3-format@1")
)})
    },
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
require("d3-format@1")
)})
    }
  ]
};

const m2 = {
  id: "@altesmi/event-assignment",
  variables: [
    {
      name: "PADGopt",
      value: (function(){return(
(L,evnt,grp,grpAll) => {
  //copy arrays with slice() so that the original data is not changed
  let LL = L.slice()
  let M = grp.map(e => {
    return {name: e.name,assignment: -1}
  })
  
  let S = evnt.slice().map(ele => {
    return {
      name: ele.name,
      min: ele.min,
      max: ele.max,
      groups: ele.hasOwnProperty('groups') ? ele.groups : []
    }
  })

  // function definitions for S
  if(typeof(S.playerCount) === 'undefined') {
    S.playerCount = (e) => {
      // function to count how many players are already assigned to an event
      
      if(S[e].groups.length > 0) {
        return S[e].groups.reduce((a, b) => {
          return a+grpAll.filter(g=>g.name === b)[0].size
        }, 0);
      } else {
        return 0
      }

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
  //console.log(LL)
  while(LL.length>0) {
    let u = LL.pop() // u is the last index of LL
    if(u.gain === 0) {
      // consider only cases where adding u to event increases happiness
      continue
    }
      
      let Mind = M.findIndex(g => g.name === u.name)
      //console.log(u.event)
      //console.log(S.playerCount(u.event))
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
      name: "randomArrangement",
      inputs: ["randomOpt","events","groups","totalHappiness","numOsallistujat"],
      value: (function(randomOpt,events,groups,totalHappiness,numOsallistujat)
{ 
 let randomArrangement = randomOpt(events,groups)
 let randomhappiness = totalHappiness(randomArrangement,groups)/numOsallistujat
 let newRandomArrangement = []
 let newRandomhappiness = 0
 //try the random arrangement 100 times to see if there are better matches
 for(let i=0;i<1000;i++) {
   newRandomArrangement = randomOpt(events,groups)
   newRandomhappiness = totalHappiness(newRandomArrangement,groups)/numOsallistujat
   if(newRandomhappiness > randomhappiness) {
     randomhappiness = newRandomhappiness
     randomArrangement = newRandomArrangement
   }
 }
  return randomArrangement
}
)
    },
    {
      name: "randomOpt",
      value: (function(){return(
(evnt,grp) => {
  
  let allEvents = evnt.slice().map(ele => {
    return {...ele, groups: []}})
  
  allEvents.playerCount = (eventName) => {
    // function to count how many players are already assigned to an event   
    let e = allEvents.findIndex(ele => {
      return ele.name === eventName })
    if(allEvents[e].groups.length > 0) {

      return allEvents[e].groups.reduce((a, b) => {
        return a+grp.filter(g=>g.name === b)[0].size
      }, 0);
    } else {
      return 0
    }

  }
  
  //shuffle events in a different list. This list is iterated in the loop
  let shuffledEvents = evnt.slice()
                      .sort((a,b)=>Math.random()-0.5)


  //array containing person names and their arrangements
  let M = grp.map(e => {
    return {name: e.name,assignment: -1}
  })
  let V = grp.slice()
  while(shuffledEvents.length>0) {
    //next random event
    let randomEvent = shuffledEvents.pop()
    
    
    // index of u in evnt so that it can be compared to preferences
    let eInd = allEvents.findIndex(ele => ele.name === randomEvent.name)
    
    // check if there are enough people signed up for this game
    // in order to avoid matching some group with this event 
    // without hope of this event ever happening
    let numPlayersToThisEvent = 0
    grp.filter(ele => {
      return typeof(ele.pref.find(p => p===eInd)) !== 'undefined'})
    .forEach(ele => {
      numPlayersToThisEvent = numPlayersToThisEvent + ele.size
    })
    if(numPlayersToThisEvent < allEvents[eInd].min) {
      //the event is not happening anyway, do not assign players to this event
      continue
    }
    
    //find a random group that wants to go to this event
    let randomGroupToThisEvent = V.filter(ele => {
      return typeof(ele.pref.find(p => p===eInd)) !== 'undefined'
    }).sort((a,b)=>Math.random()-0.5).slice(0,1)
    
    let timesTried = 0
    while(timesTried < 10) {
      
      if(randomGroupToThisEvent.length===0) {
        //no team found, increase timesTried and continue
        timesTried = timesTried +1
        continue
      }
        
      if(allEvents.playerCount(randomEvent.name)+randomGroupToThisEvent[0].size<=allEvents[eInd].max) {
        //There is room to assign this group to this event. Do it
        allEvents[eInd].groups.push(randomGroupToThisEvent[0].name)
        timesTried = 1
      } else {
        timesTried = timesTried+1
        continue
      }
      
      if(allEvents.playerCount(randomEvent.name)>=allEvents[eInd].min) {
        //This event has minimum number of players and is happening
        //set assignments for every group in this event
        allEvents[eInd].groups.forEach(ele => {
          let Mind = M.findIndex(m => m.name === ele)
          M[Mind].assignment = eInd
        })
        
      }
      //remove this group from V so they will not be placed again
      V = V.filter(ele => ele.name !== randomGroupToThisEvent[0].name)
      randomGroupToThisEvent = V.filter(ele => {
      return typeof(ele.pref.find(p => p===eInd)) !== 'undefined'
    })
        .sort((a,b)=>Math.random()-0.5).slice(0,1)
      
    }
    
  }
  
  return M
}
)})
    },
    {
      name: "checkArrangement",
      value: (function(){return(
(arr,grp,evnts) => {
  //checks if the arrangement is a valid one (ie. no event has less than minimum and no more than maximum number of   //attendees
  // OUTPUT
  // 1 = arr is valid
  // 0 = arr is not valid
  let arrToUse = JSON.parse(JSON.stringify(arr));
  let valid = 1;
  evnts.forEach(e => {
    let eInd = evnts.findIndex(ee => ee.name === e.name) // Should have just used a for loop...
    let numPlayers = 0
    let groupsAttending = arrToUse.filter(a => a.assignment === eInd)
    if(groupsAttending.length >0) {
      groupsAttending = groupsAttending.map(gr => {
        let groupdata = grp.find(g => {
          return g.name === gr.name
        })

        return {... gr, size: groupdata.size}
      })
      numPlayers = groupsAttending.reduce((total,gr) => {
        
        return total + gr.size
      
      },0)
    

      if(numPlayers < e.min){
        console.log(numPlayers)
        console.log(e)
        valid = 0
      }
      if(numPlayers > e.max) {
        valid = 0
      }
    }
  })
  
  return valid
  }
)})
    },
    {
      name: "events",
      inputs: ["numTapahtumat","randInt","minTapahtuma","maxTapahtuma"],
      value: (function(numTapahtumat,randInt,minTapahtuma,maxTapahtuma)
{
  let e = []
  for(let i=0;i<numTapahtumat;i++) {
    let minOsallistujat = randInt(minTapahtuma,1);
    let maxOsallistujat = minOsallistujat
    while(maxOsallistujat <= minOsallistujat) {
      maxOsallistujat = randInt(maxTapahtuma,1)
    }
    e.push({
      name: `tapahtuma${i+1}`,
      min: minOsallistujat,
      max: maxOsallistujat
    })
  }
  return e
}
)
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
      name: "viewof numOsallistujat",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 300,
  step: 1,
  title: "👧 Osallistuvien ryhmien lukumäärä",
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
      name: "viewof numTapahtumat",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 5,
  max: 300,
  step: 1,
  title: "🎲 Tapahtumien lukumäärä",
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
      name: "viewof minTapahtuma",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 3,
  step: 1,
  title: "Tapahtumien miniosallistujamäärä",
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
  title: "Tapahtumien maksimiosallistuajmäärä",
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
      name: "names",
      inputs: ["persons"],
      value: (function(persons){return(
persons.results.map(user => user.login.username)
)})
    },
    {
      name: "viewof maxRyhma",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 6,
  step: 1,
  title: "👧‍👦👧‍ Ryhmän maksimikoko",
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
  title: 'Kuinka monta prosenttia ryhmistä asetetaan yhden henkilön kokoisiksi pakosti'
})
)})
    },
    {
      name: "percentGroupsizeIsOne",
      inputs: ["Generators","viewof percentGroupsizeIsOne"],
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
      from: "@jashkenas/inputs",
      name: "slider",
      remote: "slider"
    },
    {
      name: "persons",
      inputs: ["d3","numOsallistujat"],
      value: (function(d3,numOsallistujat){return(
d3.json(`https://randomuser.me/api/?results=${numOsallistujat}`)
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require('d3')
)})
    }
  ]
};

const notebook = {
  id: "48eb1ef569406ca2@290",
  modules: [m0,m1,m2]
};

export default notebook;
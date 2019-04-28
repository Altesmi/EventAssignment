// URL: https://observablehq.com/@altesmi/event-assignment
// Title: Event assignment
// Author: Olli-Pekka Tikkanen (@altesmi)
// Version: 1285
// Runtime version: 1

const m0 = {
  id: "a94651ff4bb1a056@1285",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Event assignment`
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
md`Määritä osallistuvien optimoinnissa käytettävät parametrit. Ryhmien koko arvotaan satunnaisesti ykkösen ja asetetun arvon välillä. Vähintään asetettu prosenttiosuuden verran ryhmistä saa koon '1'. Tapahtumat joihin ryhmä haluaa mennä ja niiden lukumäärä arvotaan satunnaisesti ykkösen ja asetetun arvon väliltä.`
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
      name: "viewof numTapahtumat",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 5,
  max: 100,
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
      name: "viewof minTapahtuma",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 1,
  max: 4,
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
      inputs: ["md"],
      value: (function(md){return(
md `**Kuinka paljon painotetaan halukkuuksia ja kuinka paljon ryhmia (1=painotetaan vain halukkuuksia, 0=painotetaan vain että ryhmä pääsee johonkin tapahtumaan)**`
)})
    },
    {
      name: "viewof alpha",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 0.1,
  max: 1,
  step: 0.01,
  title: "Alpha"
})
)})
    },
    {
      name: "alpha",
      inputs: ["Generators","viewof alpha"],
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
md `Kokonaisonnellisuus (jos jokainen asetetaan omaan ykkösvalintaansa onnellisuus on 100%)`
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
md `${arrangement.filter(ele => ele.assignment===-1).length} (${Math.round(arrangement.filter(ele => ele.assignment===-1).length/numOsallistujat*10000)/100}%) ryhmää jäi ilman paikkaa`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `### Random matching`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `Kokonaisonnellisuus`
)})
    },
    {
      inputs: ["totalHappiness","randomArrangement","groups","numOsallistujat"],
      value: (function(totalHappiness,randomArrangement,groups,numOsallistujat){return(
`${Math.round(totalHappiness(randomArrangement,groups)/numOsallistujat * 10000)/100}%`
)})
    },
    {
      inputs: ["md","randomArrangement","numOsallistujat"],
      value: (function(md,randomArrangement,numOsallistujat){return(
md `${randomArrangement.filter(ele => ele.assignment===-1).length} (${Math.round(randomArrangement.filter(ele => ele.assignment===-1).length/numOsallistujat*10000)/100}%) ryhmää jäi ilman paikkaa`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `### menetelmien vertailu`
)})
    },
    {
      inputs: ["totalHappiness","arrangement","groups","randomArrangement"],
      value: (function(totalHappiness,arrangement,groups,randomArrangement){return(
`PADG on ${Math.round((totalHappiness(arrangement,groups)/totalHappiness(randomArrangement,groups)-1)*10000)/100} % parempi (negativinen luku tarkoittaa huonompaa)`
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
md `Optimoinnin tavoitteena on maksimoida listassa ***L*** oleva tyytyväisyys`
)})
    },
    {
      name: "arrangement",
      inputs: ["runPADGMultipleTimes","L","events","groups","updateL"],
      value: (function(runPADGMultipleTimes,L,events,groups,updateL){return(
runPADGMultipleTimes(L,events,groups,updateL)
)})
    },
    {
      name: "runPADGMultipleTimes",
      inputs: ["PADGopt","L","totalHappiness","groups","numTapahtumat"],
      value: (function(PADGopt,L,totalHappiness,groups,numTapahtumat){return(
function runPADGMultipleTimes(LL,evnts,grps,updateFun) {
  
  let arrangement = PADGopt(L,evnts,grps,grps,updateFun)
  let happiness = totalHappiness(arrangement,groups)/groups.length
  let grp = grps.slice()
  let numOptRounds = 0
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
      for(let j=0;j<numTapahtumat;j++) {
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
    let newArrangement = PADGopt(newL,newEvents,newGroups,grps,updateFun)
    newArrangement.map(ele => {
      if(ele.assignment !== -1) {
        let arrInd = arrangement.findIndex(arrEle => arrEle.name === ele.name)
        arrangement[arrInd].assignment = ele.assignment
      }
    })
  }
  
  return arrangement
}
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `PADGopt (phantom aware dynamic greedy) on algoritmi, joka yrittää asettaa listasta L aina sen elementin joka tuottaisi maksimimäärän onnellisuutta. Siinä on kuitenkin erillinen deficit-termi, joka estää suuren määrän haamueventtien luomisen. Haamueventti on eventti johon jokin ryhmä tai jotkin ryhmät haluaisivat, mutta heidän yhteenlaskettu määrä ei riitä saamaan eventtiä tapahtumaan`
)})
    },
    {
      name: "PADGopt",
      value: (function(){return(
(Lis,evnt,grp,grpAll,updateFun) => {
  let LL = JSON.parse(JSON.stringify(Lis))
  let evn = JSON.parse(JSON.stringify(evnt))
  let M = grp.map(e => {
    return {name: e.name,assignment: -1}
  })

  let S = evn.map(ele => {
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
           })
  }

  P.removeEntry = (eventName) => {
    let ind = P.findIndex(ele => ele.name === eventName)

    P.splice(ind,1)
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

  LL = LL.filter(ele => ele.gain > 0)
  
  while(LL.length>0) {
    let u = LL.pop() // u is the last index of LL
    // check if there are enough people signed up for this game
    // in order to avoid matching some group with this event 
    // without hope of this event ever happening
    let numPlayersToThisEvent = 0
    grp.filter(ele => {

      return typeof(ele.pref.find(p => p===u.event)) !== 'undefined'})
      .forEach(ele => {
      numPlayersToThisEvent = numPlayersToThisEvent + ele.size
    })
    if(u.gain === 0 || numPlayersToThisEvent < evnt[u.event].min) {
      // consider only cases where adding u to event increases happiness
      // and those where there is even theoretically possible to have
      // minimum number of players
      continue
    }

      let Mind = M.findIndex(g => g.name === u.name)

      if(M[Mind].assignment === -1 && (S.playerCount(u.event) + u.size) <= S[u.event].max) {

        // user u is not assigned and there is space in the event where we try to place u
        //console.log('before')
        //console.log(S.playerCount(u.event))
        let playersBefore = S.playerCount(u.event)
        if(S.playerCount(u.event) === 0) {
          //no players in S or S is not yet a real event
          if( deficit + (evnt[u.event].min - u.size) < V.length) {
            // adding u to this event does not decrease deficit over critical size
            // since event is not in S add it to P

            // add to deficit how much space was left over in this event
            deficit = deficit + (evnt[u.event].min - u.size) 
            if(P.includes(S[u.event].name) === 0) {
              let newPEntry = {
                name: evnt[u.event].name,
                min: evnt[u.event].min,
                max: evnt[u.event].max,
              }
              P.createEntry(newPEntry)
            }
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
          if(S.playerCount(u.event) >= S[u.event].min && P.includes(S[u.event].name) === 0) {
            // this event is not a phantom event, set M(u) to a
            M[Mind].assignment = u.event
            // remove u from other events
            
            S.forEach(ele => {
              if(ele.name !== S[u.event].name) {
                let nPlayersBefore = S.playerCount(S.findIndex(s=>s.name === ele.name))
                
                ele.groups = ele.groups.filter(e => e !== u.name)
                
                // check that there are enough players in this event
                let nPlayersAfter = S.playerCount(S.findIndex(s=>s.name === ele.name))
                //if nPlayers < ele.min add this event as a phantom event
                if(nPlayersAfter < nPlayersBefore && nPlayersAfter < ele.min) {
                  if(P.inclues(ele.name) === 0) {
                    P.createEntry({
                      name: ele.name,
                      min: ele.min,
                      max: ele.max
                    })
                  }
                  // remove assignment

                  ele.groups.forEach(e => {

                    let MindTemp = M.findIndex(m => m.name === e)

                    if(M[MindTemp].assignment === S.findIndex(s=>s.name === ele.name)) {
                      M[MindTemp].assignment = -1;
                    }
                  })
                }
              }
            })
          }

          if(S.playerCount(u.event) >= S[u.event].min && P.includes(S[u.event].name) === 1) {
            // this event is a phantom event but has now enough players to be a real event
            //console.log(u.event)
            P.removeEntry(S[u.event].name) // remove this event from phantom events

            S[u.event].groups.forEach(el => {
              let MindTemp = M.findIndex(m => m.name === el)
              M[MindTemp].assignment = u.event
            })
            
            for(let g in S[u.event].groups) {
              S.forEach(ele => {
                if(ele.name !== S[u.event].name) {
                  let nPlayersBefore = S.playerCount(S.findIndex(s=>s.name === ele.name))
                
                  ele.groups = ele.groups.filter(e => e !== S[u.event].groups[g])

                  // check that there are enough players in this event

                  let nPlayersAfter = S.playerCount(S.findIndex(s=>s.name === ele.name))
                  //if nPlayers < ele.min add this event as a phantom event
                  
                  if(nPlayersAfter < nPlayersBefore && nPlayersAfter < ele.min) {
                    if(P.includes(ele.name) === 0) {
                      P.createEntry({
                        name: ele.name,
                        min: ele.min,
                        max: ele.max

                      })
                    }
                    // remove assignment if there is assignment to this event that is now phantom event

                    ele.groups.forEach(e => {

                      let MindTemp = M.findIndex(m => m.name === e)

                      if(M[MindTemp].assignment === S.findIndex(s=>s.name === ele.name)) {
                        M[MindTemp].assignment = -1;
                      }
                    })
                  }
                }
              })

            }

          }

          //Update list LL if there was no assignment

          if(M[Mind].assignment === -1) {

            let gInd = grp.findIndex(g => g.name === u.name)
            LL = updateFun(LL,grp,gInd)


          }
        }

      }

      return M

    }
)})
    },
    {
      inputs: ["updateL","L","groups"],
      value: (function(updateL,L,groups){return(
updateL(L,groups,3)
)})
    },
    {
      name: "updateL",
      inputs: ["alpha","numHalukkuus"],
      value: (function(alpha,numHalukkuus){return(
(LL,grp,gInd) => {
  /*Updates the list LL so that gain increases as possibilities for 
  assignment decrease */
  LL.forEach(ele => {
    
    if(ele.name===grp[gInd].name ) {
      //calculate the number of preferences
      let numPref = grp[gInd].pref.length

      let numPossibilities = LL.filter(g=>g.gain > 0).filter(g => g.name ===ele.name).length
      if(numPossibilities < numPref && numPossibilities > 1) {
        ele.gain = ele.gain + (1.0-alpha)/(numPossibilities-1)*(numPref-numPossibilities)/(numHalukkuus-1)
      }
    }
  })
  
  return LL.sort((a,b) => a.gain-b.gain)
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
 for(let i=0;i<300;i++) {
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
      inputs: ["checkArrangement","arrangement","groups","events"],
      value: (function(checkArrangement,arrangement,groups,events){return(
checkArrangement(arrangement, groups,events) ? 'PADGopt tuottaa hyväksytyn sijoituksen' : 'PADGopt ei tuota hyväksyttyä sijoitusta'
)})
    },
    {
      inputs: ["checkArrangement","randomArrangement","groups","events"],
      value: (function(checkArrangement,randomArrangement,groups,events){return(
checkArrangement(randomArrangement, groups,events) ? 'RandomArrangement tuottaa hyväksytyn sijoituksen' : 'RandomArrangement ei tuota hyväksyttyä sijoitusta'
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
        console.log('min')
        console.log(e)
        valid = 0
      }
      if(numPlayers > e.max) {
        console.log('max')
        console.log(e)
        valid = 0
      }
    }
  })
  
  return valid
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
md `***L*** on lista, missä on jokaisen ryhmän jokaiseen tapahtumaan lisäämisestä saatava tyytyväisyys`
)})
    },
    {
      name: "L",
      inputs: ["numOsallistujat","numTapahtumat","groups","alpha","numHalukkuus"],
      value: (function(numOsallistujat,numTapahtumat,groups,alpha,numHalukkuus)
{
  let L = []
  for(let i=0;i<numOsallistujat;i++) {
    for(let j=0;j<numTapahtumat;j++) {
      let ind = groups[i].pref.indexOf(j)
      let gain = 0
      if(ind!== -1) {
        gain = alpha*(numHalukkuus - ind)
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
md` ***groups*** on taulukko, jossa on henkilöiden nimet ja halukkuudet osallistua mihinkin tapahtumaan`
)})
    },
    {
      name: "groups",
      inputs: ["names","randInt","maxRyhma","percentGroupsizeIsOne","events","numHalukkuus"],
      value: (function(names,randInt,maxRyhma,percentGroupsizeIsOne,events,numHalukkuus){return(
names.map(nimi => {
  let groupSize = randInt(1,maxRyhma,1)
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
    let numToGo = randInt(1,possibleEvents.length,1)
    //Sort array of possible events randomly and choose the correct index
    let randomEvents = possibleEvents.sort((a,b)=>0.5-Math.random())
    .slice(0,numToGo)
    //push randomEvents as indexex to p
    randomEvents.forEach(ele => {
      p.push(events.findIndex(e=>e.name===ele.name))
    })                   
  } else { // there is at least numHalukkuus places, draw integers randomly
    let numToGo = randInt(1,numHalukkuus,1)
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
md `***events*** on taulukko, jossa on tapahtuman nimi ja minimi ja maksimimäärä osallistujia`
)})
    },
    {
      name: "events",
      inputs: ["numTapahtumat","randInt","minTapahtuma","maxTapahtuma"],
      value: (function(numTapahtumat,randInt,minTapahtuma,maxTapahtuma)
{
  let e = []
  for(let i=0;i<numTapahtumat;i++) {
    let minOsallistujat = randInt(minTapahtuma,maxTapahtuma,1);
    let maxOsallistujat = minOsallistujat
    /*while(maxOsallistujat <= minOsallistujat) {
      
      maxOsallistujat = randInt(minTapahtuma,maxTapahtuma,1)
      
    }*/
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
      name: "randInt",
      value: (function(){return(
(minNum,maxNum,numValues) => {
  //Returns random integer between 1 and val
  //'num' times. duplicate values are not allowed
  if(numValues===1) {
    return Math.floor(Math.random()*(maxNum-minNum+1)+minNum);
  } else {
  let randints = []
  for(let i=0;i<numValues;i++) {
    let u = Math.floor(Math.random()*(maxNum-minNum)+minNum+1)
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
  const wrapper = html`<div></div>`;
  if (!form)
    form = html`<form>
	<input name=input type=${type} />
  </form>`;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) form.input.setAttribute(key, val);
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
  if (format) format = typeof format === "function" ? format : d3format.format(format);
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
      const value = getValue ? getValue(form.input) : form.input.value;
      if (form.output) {
        const out = display ? display(value) : format ? format(value) : value;
        if (out instanceof window.Element) {
          while (form.output.hasChildNodes()) {
            form.output.removeChild(form.output.lastChild);
          }
          form.output.append(out);
        } else {
          form.output.value = out;
        }
      }
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      wrapper.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  while (form.childNodes.length) {
    wrapper.appendChild(form.childNodes[0]);
  }
  form.append(wrapper);
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

const notebook = {
  id: "a94651ff4bb1a056@1285",
  modules: [m0,m1]
};

export default notebook;
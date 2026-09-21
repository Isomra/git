(() => {
  const solvedMap = {
    intro2: { solved: true, best: true },
    intro3: { solved: true, best: true },
    intro4: { solved: true, best: true },

    rampup1: { solved: true, best: true },
    rampup2: { solved: true, best: true },
    rampup3: { solved: true, best: true },
    rampup4: { solved: true, best: true },

    move1: { solved: true, best: true },
    move2: { solved: true, best: true },
    move3: { solved: true, best: true },
    move4: { solved: true, best: true },

    mixed1: { solved: true, best: true },
    mixed2: { solved: true, best: true },
    mixed3: { solved: true, best: true },
    mixed4: { solved: true, best: true },
    mixed5: { solved: true, best: true },

    advanced1: { solved: true, best: true },
    advanced2: { solved: true, best: true },
    advanced3: { solved: true, best: true },

    remote1: { solved: true, best: true },
    remote2: { solved: true, best: true },
    remote3: { solved: true, best: true },
    remote4: { solved: true, best: true },
    remote5: { solved: true, best: true },
    remote6: { solved: true, best: true },
    remote7: { solved: true, best: true },
    remote8: { solved: true, best: true },

    remoteAdvanced1: { solved: true, best: true },
    remoteAdvanced2: { solved: true, best: true },
    remoteAdvanced3: { solved: true, best: true },
    remoteAdvanced4: { solved: true, best: true },
    remoteAdvanced5: { solved: true, best: true },
    remoteAdvanced6: { solved: true, best: true },
    remoteAdvanced7: { solved: true, best: true },
    remoteAdvanced8: { solved: true, best: true }
  };

  localStorage.setItem("solvedMap", JSON.stringify(solvedMap));

  console.log("✅ solvedMap installed!");
  console.log(JSON.parse(localStorage.getItem("solvedMap")));
})();

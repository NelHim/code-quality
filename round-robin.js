function roundRobin(jobs, slice, index){
    let time = 0;
    
    for(let i = 0; jobs[index] > 0; i = (i + 1) % jobs.length) {
      if (jobs[i] > 0) {
        let work = Math.min(slice, jobs[i]);
        jobs[i] -= work;
        time += work;
      }
    }
    
    return time;
  }
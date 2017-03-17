 function getEmpByKey(key, emps) {
        for (var x = 0; x < emps.length; x++) {
            if (key == emps[x].$key) {
                return (emps[x]["empName"]);
            }
        }
    }
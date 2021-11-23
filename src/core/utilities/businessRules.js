export default class BusinessRules {
	
    run(...logics) {
		for (const logic of logics){
            if (logic)
                return logic;
        }
		return true
	}

}
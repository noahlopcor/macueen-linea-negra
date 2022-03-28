basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
    	
    }
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
        basic.pause(100)
    }
})

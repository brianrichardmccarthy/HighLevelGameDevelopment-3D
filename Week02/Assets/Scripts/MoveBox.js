#pragma strict

private var switchHeight: boolean;

function Start () {
	switchHeight = false;
}

function Update () {
	if (switchHeight) {
		this.transform.position.y -= .05;
	} else {
		this.transform.position.y += .05;
	}

	if (this.transform.position.y >= 3) {
		switchHeight = true;
	} else if (this.transform.position.y <= 1) {
		switchHeight = false;
	}

	transform.Rotate(0, 1.5, 0);
}
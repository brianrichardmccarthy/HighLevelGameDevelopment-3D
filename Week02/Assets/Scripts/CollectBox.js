#pragma strict

import UnityEngine.SceneManagement;

var score: int;
var timer: float;
var clock: float;
var showMessage: boolean;
var m: int;
var s: int; 
// GameObject.Find("Score").GetComponent.<UI.Text>().text =""; 

function Start () {
	score = 0;
	timer = 0.0f;
	showMessage = false;
	m = 0;
	s = 0;

	GameObject.Find("Score").GetComponent.<UI.Text>().text ="Score: " + score;
	GameObject.Find("Message").GetComponent.<UI.Text>().text = "";
	GameObject.Find("Clock").GetComponent.<UI.Text>().text = m+":"+s;
}

function Update () {
	clock += Time.deltaTime;
	m = clock/60;
	s = clock%60;

	if (m == 99 && s == 99) {
		m = 0;
		s = 0;
		clock = 0.0f;
	}

	GameObject.Find("Clock").GetComponent.<UI.Text>().text = m+":"+s;

	if (showMessage) {
		timer += Time.deltaTime;
		if (timer >= 2) {
			timer = 0.0f;
			showMessage = false;
			GameObject.Find("Message").GetComponent.<UI.Text>().text = "";
		}
	}
	// print("Hello World");
}

function OnControllerColliderHit(col: ControllerColliderHit) {
	// print("Hit");
	if (col.collider.gameObject.tag  == "collect") {
		Destroy(col.collider.gameObject);
		score++;
		showMessage = true;
		GameObject.Find("Score").GetComponent.<UI.Text>().text ="Score: " + score;
		GameObject.Find("Message").GetComponent.<UI.Text>().text = score + " Boxes Collected";
		// print(score);
		// if (score == 3)
		// SceneManager.LoadScene("scene2"); // load a new scene
	}
}
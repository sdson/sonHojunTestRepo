/**
 * 어떤 일을 하고 있습니까?
 */
var F4D_Plane = function() {
	// ax+by+cz+d = 0 plane.***
	this.a = 0.0;
	this.b = 0.0;
	this.c = 0.0;
	this.d = 0.0;
};

/**
 * 어떤 일을 하고 있습니까?
 * @param px = 변수
 * @param py = 변수
 * @param pz = 변수
 * @param nx = 변수
 * @param ny = 변수
 * @param nz = 변수
 */
F4D_Plane.prototype.setPointAndNormal = function(px, py, pz, nx, ny, nz) {
	this.a = nx;
	this.b = ny;
	this.c = nz;
	this.d = -this.a*px -this.b*py - this.c*pz;
};

/**
 * 어떤 일을 하고 있습니까?
 * @param line = 변수
 * @param intersectionPoint = 변수
 */
F4D_Plane.prototype.intersectionLine = function(line, intersectionPoint) {
	
	var r = line.point.x;
	var s = line.point.y;
	var t = line.point.z;
	
	var u = line.direction.x;
	var v = line.direction.y;
	var w = line.direction.z;
	
	var den = this.a*u + this.b*v + this.c*w;
	
	if(Math.abs(den) > 10E-8)
	{
		var alfa = -((this.a*r + this.b*s + this.c*t + this.d)/(den));
		
		if(intersectionPoint == undefined)
			intersectionPoint = new f4d_point3d();
		
		intersectionPoint.set(r+alfa*u, s+alfa*v, t+alfa*w);
		return intersectionPoint;
	}
	else
		return undefined;
};

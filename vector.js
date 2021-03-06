class Vector {
  // main functionalities
  constructor(coordinates) {
    this.coordinates = coordinates
  }

  print() {
    const message = `Vector: ${this.coordinates}`
    console.log(message)
    return message
  }

  equals(vector) {
    return this.coordinates.toString() === vector.coordinates.toString()
  }

  // operations
  add(vector) {
    const result = this.coordinates.map((coordinate, index) => {
      return coordinate + (vector.coordinates[index] || 0)
    })
    return new Vector(result)
  }

  subtract(vector) {
    const result = this.coordinates.map((coordinate, index) => {
      return coordinate - (vector.coordinates[index] || 0)
    })
    return new Vector(result)
  }

  multiply(scalar) {
    const result = this.coordinates.map(coordinate => coordinate * scalar)
    return new Vector(result)
  }

  magnitude() {
    return Math.sqrt(
      this.coordinates
        .map(coordinate => Math.pow(coordinate, 2))
        .reduce((accum, coordinate) => accum + coordinate, 0)
    )
  }

  normalize() {
    const magnitude = this.magnitude()
    return this.multiply(1 / magnitude)
  }

  dotProduct(vector) {
    return this.coordinates
      .map((coordinate, index) => coordinate * (vector.coordinates[index] || 0))
      .reduce((accum, coordinate) => accum + coordinate, 0)
  }

  angle(vector, options) {
    const radiance = Math.acos(
      this.dotProduct(vector) / (this.magnitude() * vector.magnitude())
    )
    if (options && options.degrees) {
      return (radiance * 180) / Math.PI
    }
    return radiance
  }
}

module.exports = Vector

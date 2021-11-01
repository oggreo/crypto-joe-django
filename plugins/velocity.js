import Velocity from 'velocity-animate'

export default (ctx, inject) => {
  if (process.client) {
    inject('velocity', Velocity)
  }
}
// import Velocity from 'velocity-animate'

// export default ({ ctx, inject }) => {
//   if (process.client) {
//     const Velocity = require('velocity-animate')
//     inject('velocity', Velocity)
//   }
// }

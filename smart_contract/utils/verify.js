const { run } = require('hardhat')

const verify = async contractAddress => {
  console.log('Verifying Contract....')
  try {
    await run('verify:verify', {
      address: contractAddress,
    })
  } catch (error) {
    if (error.message.toLowerCase().includes('already verified')) {
      console.log('Already verified!!')
    } else {
      console.error(error)
    }
  }
}

module.exports = { verify }

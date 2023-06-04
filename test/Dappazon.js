const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
	let dappazon;
	let deployer;
	let buyer;

	beforeEach(async ()=> {
		// console.log(await ethers.getSigners());
		[deployer, buyer] = await ethers.getSigners();
		const Dappazon = await ethers.getContractFactory("Dappazon")
		dappazon = await Dappazon.deploy()
	})

	describe("Deployment", () => {
		it('Sets the owner', async () => {
			expect(await dappazon.owner()).to.equal(deployer.address);
		})
	})

	
})

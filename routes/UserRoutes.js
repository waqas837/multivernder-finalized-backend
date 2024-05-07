const express = require("express");
const router = express.Router();
const upload = require("../middleware/Imageupload");
const {
  signup,
  createProduct,
  getProducts,
  userProfileUpdate,
  getUserdata,
  switchAccount,
  loginAccount,
  getGigsRandom,
  loadParticipants,
  loadParticipantsChatSingle,
  orderRequestByBuyer,
  getAllOrdersOfBuyer,
  offerAcceptedBySeller,
  getAllOrdersOfSeller,
  submitProjectDelivery,
  getCurrentOrderStatus,
  buyerOrderCompleted,
  rateSeller,
  getSingleProduct,
  updateGig,
  searchgigs,
  createSecret,
  createPayment,
  addParticipant,
  removeCategory,
  allCategories,
  addCategory,
} = require("../controller/usersController");
router.post("/signup/:userType", signup);
router.post("/login", loginAccount);
router.post("/switchAccount/:userid/:userType", switchAccount);
router.get("/getUserData/:userid", getUserdata);
router.post("/createProduct/:userid", upload.single("file"), createProduct);
router.get("/getAllProducts/:userid", getProducts);
router.get("/getGigsRandom", getGigsRandom);
router.patch(
  "/userProfileImage/:userid",
  upload.single("file"),
  userProfileUpdate
);
// messages routes
router.get("/loadParticipants/:buyerid", loadParticipants);
router.get("/loadParticipantsChat/:alsoLoggedInUserId/:otherUserID", loadParticipantsChatSingle);
// booking order routes
router.post("/orderRequestByBuyer/:buyerId/:sellerId/:gigId", orderRequestByBuyer);
router.get("/getAllBueryOrders/:buyerId", getAllOrdersOfBuyer);
router.get("/getSellersOrder/:sellerId", getAllOrdersOfSeller);
router.patch("/offerAcceptedBySeller/:offerId", offerAcceptedBySeller);
router.post("/submitProjectDelivery/:orderId", upload.any(), submitProjectDelivery);
router.get("/getCurrentOrderStatus/:orderId", getCurrentOrderStatus);
router.get("/buyerOrderCompleted/:orderId", buyerOrderCompleted);
router.patch("/rateSeller/:gigId/:buyerId", rateSeller);
router.get("/getSingleProduct/:gigId", getSingleProduct);
router.patch("/updateGig/:gigId", upload.single("file"), updateGig);
router.post("/searchgigs", searchgigs);
router.post("/create-intent", createPayment);
router.patch("/addParticipant/:senderid/:recieverId", addParticipant);
router.post("/addCategory/:category", addCategory);
router.delete("/removeCategory/:_id", removeCategory);
router.get("/getAllCategories", allCategories);


module.exports = router;

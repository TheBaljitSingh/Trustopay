const Website = require('../models/websiteModel');

// Get all websites
exports.getAllWebsites = async (req, res) => {
  try {
    const websites = await Website.find();
    res.json(websites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single website by ID
exports.getWebsiteById = async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(404).json({ message: 'Website not found' });
    }
    res.json(website);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new website
exports.createWebsite = async (req, res) => {
  try {
    const newWebsite = new Website(req.body);
    const website = await newWebsite.save();
    res.status(201).json(website);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a website by ID
exports.updateWebsite = async (req, res) => {
  try {
    const website = await Website.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!website) {
      return res.status(404).json({ message: 'Website not found' });
    }
    res.json(website);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a website by ID
exports.deleteWebsite = async (req, res) => {
  try {
    const website = await Website.findByIdAndDelete(req.params.id);
    if (!website) {
      return res.status(404).json({ message: 'Website not found' });
    }
    res.json({ message: 'Website deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Verify a website by ID
exports.verifyWebsite = async (req, res) => {
  try {
    // console.log("request aaya");
    const website = await Website.findById(req.params.id);
    if (!website) {
      return res.status(404).json({ message: 'Website not found' });
    }
    website.verified = true;
    await website.save();
    res.json(website);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.searchWebsites = async (req, res) => {
  try {
    console.log(req.query);
    
    const query = req.query.q?.trim();

    if (!query) {
      return res.status(400).json({ message: "No search query provided" });
    }

    const regex = new RegExp(query, 'i'); // Case-insensitive search

    const websites = await Website.find({
      $or: [
        { name: regex },
        { url: regex }
      ]
    }).exec();

    if (websites.length === 0) {
      return res.status(404).json({ message: "No websites found matching the query" });
    }

    res.json(websites);
  } catch (error) {
    console.error('Error searching websites:', error); // Log the error for debugging
    res.status(500).json({ error: 'Internal server error' });
  }
};

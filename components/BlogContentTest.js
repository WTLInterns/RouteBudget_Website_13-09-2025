// Test component to verify blog content display
const BlogContentTest = () => {
  const testContent = `
    <div class="prose-content">
      <h2>Test Content Display</h2>
      <p>This is a test paragraph to verify content display.</p>
      
      <div class="cta-section">
        <div class="cta-hero">
          <h2 class="cta-title">Track Every Rupee. Save Fuel. <span class="highlight">Grow Your Fleet.</span></h2>
          <p class="cta-description">In 2025, fleet management software is no longer a luxury; it's a necessity. Whether you are a small transport business or a large logistics operator, investing in a reliable online fleet management software like RouteBudget can significantly streamline your operations.</p>
        </div>

        <div class="conclusion-section">
          <h3 class="conclusion-title">Conclusion: RouteBudget is the Key to Efficient Fleet Management</h3>
          <p class="conclusion-text">Whether you're managing 10 or 1000 vehicles, RouteBudget helps you track every rupee, every KM, every day. Ready to modernize your fleet operations? Explore RouteBudget now and experience how this advanced fleet management software can improve your business efficiency and reduce costs.</p>
        </div>

        <div class="final-cta">
          <h3 class="final-cta-title">Want to Take Control of Your Fleet, Expenses, and Drivers?</h3>
          <p class="final-cta-text">Managing a fleet doesn't have to be chaotic. With a powerful yet easy-to-use platform like RouteBudget, you can improve efficiency, reduce hidden costs, and monitor operations in real time. Whether you're a cab operator, a logistics business, or a travel agency, RouteBudget is designed for Indian transport professionals like you.</p>
          
          <div class="cta-buttons">
            <a href="#contact" class="btn-primary">Get Free Demo</a>
            <a href="/blog" class="btn-secondary">Read More Articles</a>
          </div>
        </div>
      </div>
    </div>
  `;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Blog Content Test</h1>
      <div 
        className="prose prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: testContent }}
      />
    </div>
  );
};

export default BlogContentTest;

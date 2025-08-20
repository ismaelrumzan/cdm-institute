# RAG Agent Learning Path Plan

## Overview

This learning path teaches developers how to build a production-ready Retrieval-Augmented Generation (RAG) agent using the [Vercel AI SDK RAG Starter](https://github.com/vercel/ai-sdk-rag-starter) repository. The course follows a project-based approach with hands-on coding, clear explanations, and visual diagrams.

**Target Audience:** Developers familiar with JavaScript/TypeScript and React, but new to Next.js, Vercel, and AI development.

**Prerequisites:**

- Basic knowledge of React and TypeScript
- Familiarity with command line tools
- Understanding of REST APIs
- No prior experience with Next.js or Vercel required

**Duration:** 4-6 hours (self-paced, asynchronous)

**Tech Stack:**

- Next.js 14 (App Router)
- AI SDK
- OpenAI API
- Drizzle ORM
- PostgreSQL with pgvector
- Vercel deployment

**Support:** Slack/Email support only - all content is asynchronous

---

## Module 1: Understanding RAG Fundamentals

### Learning Objectives

- Explain what RAG is and why it's important for AI applications
- Understand the relationship between embeddings, vector databases, and semantic search
- Describe the chunking process and its role in RAG systems
- Identify real-world use cases for RAG applications

### Content Structure

#### 1.1 Conceptual Foundation (25 minutes)

**Mintlify Components:** `Callout`, `Tabs`, `MDXImage`

**Content:**

- **What is RAG?** - Clear explanation with visual diagrams showing the RAG flow
- **Why RAG Matters** - Real-world examples and limitations of traditional LLMs
- **RAG Architecture Overview** - Step-by-step process visualization with diagrams

**Interactive Elements:**

- Interactive diagram showing the RAG flow (no video)
- Code examples showing before/after RAG implementation
- Self-assessment quiz on RAG concepts

#### 1.2 Embeddings Deep Dive (35 minutes)

**Mintlify Components:** `CodeGroup`, `Note`, `MDXImage`

**Content:**

- **Vector Space Concepts** - Visual representation of embeddings with diagrams
- **Similarity Metrics** - Cosine similarity explained with examples and visualizations
- **Chunking Strategies** - Different approaches and when to use them

**Interactive Elements:**

- Interactive embedding visualization tool
- Similarity calculator with visual feedback
- Chunking strategy comparison tool

#### 1.3 Practical Exercise: Embedding Exploration (20 minutes)

**Mintlify Components:** `Snippet`, `Callout`

**Exercise:** Use a simple embedding playground to:

- Generate embeddings for different text inputs
- Compare similarity scores
- Experiment with different chunking strategies

**Reflection Questions:**

- How does chunk size affect embedding quality?
- What types of content would benefit most from RAG?
- How would you design a chunking strategy for your specific use case?

---

## Module 2: Project Setup and Environment Configuration

### Learning Objectives

- Clone and set up the Vercel AI SDK RAG Starter repository
- Configure PostgreSQL database with pgvector extension
- Set up development environment with proper tooling
- Understand the project structure and architecture

### Content Structure

#### 2.1 Repository Setup (30 minutes)

**Mintlify Components:** `Snippet`, `Steps`, `Callout`

**Content:**

- **Starter Repository Overview** - Understanding what's included in the [ai-sdk-rag-starter](https://github.com/vercel/ai-sdk-rag-starter)
- **Repository Setup** - Clone and configure the starter project
- **Dependencies Installation** - Understanding the tech stack and package.json
- **Environment Configuration** - Setting up API keys and database connections

**Interactive Elements:**

- Step-by-step setup checklist
- Interactive dependency explanation tool
- Environment variable validation checker

#### 2.2 Database Setup (40 minutes)

**Mintlify Components:** `Steps`, `Snippet`, `Note`

**Content:**

- **PostgreSQL with Vercel** - Step-by-step database creation with screenshots
- **pgvector Extension** - Understanding vector database capabilities
- **Database Migration** - Running initial schema setup
- **Troubleshooting Common Issues** - Solutions for common setup problems

**Interactive Elements:**

- Database setup wizard with progress tracking
- Migration status checker
- Database connection tester

#### 2.3 Development Environment (25 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `MDXImage`

**Content:**

- **Local Development Server** - Starting the application
- **Database Studio** - Using Drizzle Studio for data inspection
- **Debugging Tools** - Setting up development tooling
- **Project Structure Walkthrough** - Understanding the codebase organization

**Practical Exercise:**

- Verify all components are working correctly
- Test database connectivity
- Explore the starter project structure

**Reflection Questions:**

- What are the benefits of using pgvector over other vector databases?
- How does the project structure support scalability?
- What debugging strategies would you use for database issues?

---

## Module 3: Database Schema and Data Modeling

### Learning Objectives

- Understand the existing database schemas in the starter project
- Implement vector storage with proper indexing
- Understand foreign key relationships and data integrity
- Set up database migrations and version control

### Content Structure

#### 3.1 Schema Analysis (30 minutes)

**Mintlify Components:** `CodeGroup`, `MDXImage`, `Note`

**Content:**

- **Existing Schema Review** - Understanding the resources table structure
- **Embeddings Table Design** - Vector storage with proper indexing
- **Relationship Design** - Foreign keys and cascading operations
- **Schema Visualization** - Diagrams showing table relationships

**Interactive Elements:**

- Interactive schema designer
- Database relationship visualizer
- Index performance analyzer

#### 3.2 Vector Database Implementation (30 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `Steps`

**Content:**

- **pgvector Integration** - Setting up vector columns in the embeddings table
- **Indexing Strategies** - HNSW vs IVFFlat performance comparison
- **Optimization Techniques** - Query performance and storage efficiency
- **Schema Migration** - Adding the embeddings table to the existing schema

**Interactive Elements:**

- Vector index comparison tool
- Query performance analyzer
- Storage optimization calculator

#### 3.3 Migration and Validation (20 minutes)

**Mintlify Components:** `Snippet`, `Steps`

**Content:**

- **Migration Scripts** - Running database migrations safely
- **Schema Validation** - Ensuring data integrity
- **Testing the Setup** - Verifying the database works correctly

**Practical Exercise:**

- Run the database migration
- Test the embeddings table creation
- Verify the schema is working correctly

**Reflection Questions:**

- How would you scale this schema for millions of embeddings?
- What backup and recovery strategies would you implement?
- How would you handle schema evolution in production?

---

## Module 4: AI SDK Integration and Embedding Generation

### Learning Objectives

- Integrate AI SDK with OpenAI for embedding generation
- Implement efficient chunking strategies
- Create reusable embedding utilities
- Handle API rate limits and error management

### Content Structure

#### 4.1 AI SDK Setup (25 minutes)

**Mintlify Components:** `Snippet`, `Steps`, `Callout`

**Content:**

- **AI SDK Installation** - Adding dependencies to the existing project
- **OpenAI Integration** - API key setup and model selection
- **Provider Configuration** - Understanding the unified interface
- **Environment Variables** - Setting up API keys securely

**Interactive Elements:**

- API key validation tool
- Model comparison interface
- Provider selection guide

#### 4.2 Embedding Generation (40 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `Note`

**Content:**

- **Chunking Implementation** - Text processing strategies for the RAG agent
- **Batch Embedding** - Efficient API usage with embedMany
- **Error Handling** - Rate limiting and retry logic
- **Performance Optimization** - Caching and batching strategies

**Interactive Elements:**

- Live embedding generator
- Chunking strategy tester
- Performance benchmarking tool

#### 4.3 Embedding Storage (25 minutes)

**Mintlify Components:** `Snippet`, `Steps`, `Callout`

**Content:**

- **Database Integration** - Storing embeddings with metadata
- **Batch Operations** - Efficient database writes
- **Data Validation** - Ensuring embedding quality and consistency
- **Integration with Server Actions** - Connecting to the existing createResource function

**Practical Exercise:**

- Implement the embedding generation logic
- Add embedding storage to the server action
- Test the complete embedding pipeline

**Reflection Questions:**

- How would you handle embedding model updates?
- What strategies would you use for embedding versioning?
- How would you optimize embedding generation for large datasets?

---

## Module 5: Server Actions and Data Management

### Learning Objectives

- Understand and extend the existing Server Actions in the starter project
- Create robust error handling and validation
- Design efficient data flow patterns
- Implement proper TypeScript types and schemas

### Content Structure

#### 5.1 Server Actions Fundamentals (30 minutes)

**Mintlify Components:** `CodeGroup`, `Note`, `Callout`

**Content:**

- **Server Actions Overview** - Understanding the "use server" directive
- **Existing Implementation** - Reviewing the createResource function
- **Type Safety** - Zod schemas and TypeScript integration
- **Error Handling** - Graceful error management and user feedback

**Interactive Elements:**

- Server action debugger
- Type validation tester
- Error handling simulator

#### 5.2 Resource Management Enhancement (35 minutes)

**Mintlify Components:** `Snippet`, `Steps`, `CodeGroup`

**Content:**

- **Extending createResource** - Adding embedding generation to the existing function
- **Embedding Pipeline** - Automatic embedding generation on resource creation
- **Data Validation** - Input sanitization and schema validation
- **Error Recovery** - Handling embedding generation failures

**Interactive Elements:**

- Resource management interface
- Embedding pipeline visualizer
- Validation error simulator

#### 5.3 Testing and Validation (25 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `Note`

**Content:**

- **Testing the Pipeline** - Verifying resource creation and embedding generation
- **Database Inspection** - Using Drizzle Studio to verify data
- **Error Scenarios** - Testing various failure conditions
- **Performance Monitoring** - Tracking operation performance

**Practical Exercise:**

- Test the enhanced createResource function
- Verify embeddings are generated and stored correctly
- Handle various error scenarios

**Reflection Questions:**

- How would you implement optimistic updates?
- What caching strategies would you use for frequently accessed data?
- How would you handle concurrent modifications?

---

## Module 6: Building the Chat Interface

### Learning Objectives

- Create responsive chat interfaces with AI SDK
- Implement real-time message streaming
- Design intuitive user experiences
- Handle different message types and states

### Content Structure

#### 6.1 Chat Interface Setup (35 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `MDXImage`

**Content:**

- **useChat Hook** - AI SDK React integration
- **Message Components** - Rendering different message types
- **Input Handling** - Form submission and validation
- **UI Components** - Using shadcn-ui components effectively

**Interactive Elements:**

- Live chat interface demo
- Message type visualizer
- Input validation tester

#### 6.2 Real-time Streaming (30 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `Note`

**Content:**

- **Streaming Implementation** - Real-time message updates
- **Loading States** - User feedback during processing
- **Error Handling** - Graceful error display and recovery
- **Tool Call Visualization** - Showing when tools are being used

**Interactive Elements:**

- Streaming performance analyzer
- Loading state simulator
- Error handling tester

#### 6.3 UI/UX Enhancement (25 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `MDXImage`

**Content:**

- **Responsive Design** - Mobile-friendly interface
- **Accessibility** - Screen reader support and keyboard navigation
- **Visual Feedback** - Tool calls and processing indicators
- **Styling with TailwindCSS** - Customizing the appearance

**Practical Exercise:**

- Implement custom message components
- Add keyboard shortcuts
- Create mobile-optimized interface

**Reflection Questions:**

- How would you implement message persistence?
- What accessibility features are most important for chat interfaces?
- How would you handle offline functionality?

---

## Module 7: API Routes and Model Integration

### Learning Objectives

- Create Next.js API routes for AI model integration
- Implement streaming responses with proper error handling
- Configure model parameters and system prompts
- Handle different response formats and states

### Content Structure

#### 7.1 API Route Setup (30 minutes)

**Mintlify Components:** `Snippet`, `Steps`, `Callout`

**Content:**

- **Route Handler Creation** - Next.js App Router API routes
- **Request Processing** - Message parsing and validation
- **Response Streaming** - Real-time response generation
- **Error Handling** - Proper error responses and logging

**Interactive Elements:**

- API route tester
- Request/response visualizer
- Streaming performance monitor

#### 7.2 Model Configuration (35 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `Note`

**Content:**

- **Model Selection** - Choosing appropriate models for different tasks
- **System Prompts** - Defining agent behavior and constraints
- **Parameter Tuning** - Temperature, max tokens, and other settings
- **RAG-Specific Configuration** - Optimizing for retrieval-augmented generation

**Interactive Elements:**

- Model comparison tool
- Prompt testing interface
- Parameter optimization guide

#### 7.3 Response Handling (25 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `CodeGroup`

**Content:**

- **Message Formatting** - Converting between different message formats
- **Error Recovery** - Handling model failures and timeouts
- **Response Validation** - Ensuring response quality and safety
- **Streaming Optimization** - Efficient real-time responses

**Practical Exercise:**

- Implement the chat API route
- Test streaming responses
- Handle various error scenarios

**Reflection Questions:**

- How would you implement response caching?
- What strategies would you use for model fallbacks?
- How would you handle rate limiting and costs?

---

## Module 8: Tool Integration and Multi-Step Reasoning

### Learning Objectives

- Implement AI tools for extending agent capabilities
- Create multi-step reasoning with tool chaining
- Design tool schemas and validation
- Handle tool execution and result processing

### Content Structure

#### 8.1 Tool Fundamentals (35 minutes)

**Mintlify Components:** `CodeGroup`, `Note`, `MDXImage`

**Content:**

- **Tool Architecture** - Understanding tool-based AI systems
- **Schema Design** - Zod schemas for tool inputs and outputs
- **Tool Selection** - How models choose appropriate tools
- **Tool Integration** - Connecting tools to the chat interface

**Interactive Elements:**

- Tool architecture visualizer
- Schema validation tester
- Tool selection simulator

#### 8.2 Resource Management Tools (40 minutes)

**Mintlify Components:** `Snippet`, `Steps`, `Callout`

**Content:**

- **addResource Tool** - Creating and embedding new knowledge
- **getInformation Tool** - Retrieving relevant information
- **Tool Integration** - Connecting tools to the chat interface
- **Tool Visualization** - Showing tool calls in the UI

**Interactive Elements:**

- Tool execution visualizer
- Resource management interface
- Tool performance analyzer

#### 8.3 Multi-Step Reasoning (25 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `Note`

**Content:**

- **stopWhen Configuration** - Controlling multi-step execution
- **Tool Chaining** - Sequential tool execution
- **Result Processing** - Handling tool outputs and errors
- **User Feedback** - Keeping users informed of tool progress

**Practical Exercise:**

- Implement the addResource and getInformation tools
- Test multi-step reasoning
- Add tool result visualization

**Reflection Questions:**

- How would you implement tool versioning?
- What strategies would you use for tool discovery?
- How would you handle tool execution failures?

---

## Module 9: Semantic Search and Retrieval

### Learning Objectives

- Implement efficient semantic search algorithms
- Optimize similarity calculations and ranking
- Handle query processing and result filtering
- Design scalable retrieval systems

### Content Structure

#### 9.1 Semantic Search Implementation (40 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `MDXImage`

**Content:**

- **Query Embedding** - Converting user queries to vectors
- **Similarity Calculation** - Cosine similarity and distance metrics
- **Result Ranking** - Ordering results by relevance
- **Search Implementation** - Building the findRelevantContent function

**Interactive Elements:**

- Semantic search visualizer
- Similarity calculator
- Ranking algorithm tester

#### 9.2 Search Optimization (30 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `Note`

**Content:**

- **Index Optimization** - HNSW index tuning and performance
- **Query Optimization** - Efficient database queries
- **Caching Strategies** - Reducing computational overhead
- **Performance Monitoring** - Tracking search performance

**Interactive Elements:**

- Performance benchmarking tool
- Index optimization guide
- Query analyzer

#### 9.3 Testing and Validation (20 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `Callout`

**Content:**

- **Search Testing** - Verifying search functionality
- **Result Quality** - Evaluating search relevance
- **Performance Testing** - Measuring response times and throughput
- **Edge Cases** - Handling unusual queries

**Practical Exercise:**

- Test the semantic search functionality
- Add some test data and verify search results
- Optimize search performance

**Reflection Questions:**

- How would you implement search result caching?
- What strategies would you use for search relevance feedback?
- How would you scale search for millions of documents?

---

## Module 10: Production Deployment and Optimization

### Learning Objectives

- Deploy RAG applications to Vercel
- Implement monitoring and logging systems
- Optimize performance and costs
- Handle production challenges and scaling

### Content Structure

#### 10.1 Vercel Deployment (35 minutes)

**Mintlify Components:** `Steps`, `Snippet`, `Callout`

**Content:**

- **Vercel Account Setup** - Creating and configuring Vercel account
- **Environment Setup** - Production environment variables
- **Database Migration** - Production database setup
- **Deployment Process** - Deploying the application to Vercel

**Interactive Elements:**

- Deployment checklist
- Environment validator
- Migration status checker

#### 10.2 Performance Optimization (35 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `Note`

**Content:**

- **Database Optimization** - Query performance and indexing
- **API Optimization** - Rate limiting and caching
- **Frontend Optimization** - Bundle size and loading performance
- **Cost Optimization** - Managing API usage and database costs

**Interactive Elements:**

- Performance analyzer
- Optimization recommendations
- Cost calculator

#### 10.3 Monitoring and Maintenance (20 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `Steps`

**Content:**

- **Application Monitoring** - Error tracking and performance monitoring
- **Database Monitoring** - Query performance and resource usage
- **Cost Management** - API usage tracking and optimization
- **Maintenance Tasks** - Regular upkeep and updates

**Practical Exercise:**

- Deploy the application to Vercel
- Set up basic monitoring
- Optimize for production use

**Reflection Questions:**

- How would you implement A/B testing for different RAG strategies?
- What backup and disaster recovery plans would you implement?
- How would you handle data privacy and compliance requirements?

---

## Module 11: Testing and Quality Assurance

### Learning Objectives

- Implement comprehensive testing strategies for RAG applications
- Test embedding generation and storage
- Validate search functionality and relevance
- Ensure application reliability and performance

### Content Structure

#### 11.1 Testing Strategy (30 minutes)

**Mintlify Components:** `CodeGroup`, `Note`, `MDXImage`

**Content:**

- **Testing Overview** - Understanding what to test in RAG applications
- **Unit Testing** - Testing individual components and functions
- **Integration Testing** - Testing the complete pipeline
- **End-to-End Testing** - Testing the full user experience

**Interactive Elements:**

- Testing strategy planner
- Test case generator
- Coverage analyzer

#### 11.2 Embedding and Search Testing (35 minutes)

**Mintlify Components:** `Snippet`, `Callout`, `Steps`

**Content:**

- **Embedding Generation Tests** - Verifying embedding quality
- **Search Functionality Tests** - Testing semantic search accuracy
- **Performance Tests** - Measuring response times and throughput
- **Edge Case Testing** - Handling unusual inputs and scenarios

**Interactive Elements:**

- Test data generator
- Performance benchmarking tool
- Search quality evaluator

#### 11.3 User Experience Testing (25 minutes)

**Mintlify Components:** `CodeGroup`, `Snippet`, `Callout`

**Content:**

- **Chat Interface Testing** - Testing the user interface
- **Tool Integration Testing** - Verifying tool functionality
- **Error Handling Testing** - Testing error scenarios
- **Accessibility Testing** - Ensuring accessibility compliance

**Practical Exercise:**

- Create comprehensive test suite
- Test all major functionality
- Document test results and improvements

**Reflection Questions:**

- What are the most critical areas to test in a RAG application?
- How would you measure the quality of search results?
- What automated testing strategies would you implement?

---

## Module 12: Real-World Applications and Best Practices

### Learning Objectives

- Apply RAG concepts to real-world use cases
- Implement best practices for production RAG systems
- Design scalable architectures for different domains
- Understand ethical considerations and limitations

### Content Structure

#### 12.1 Use Case Analysis (40 minutes)

**Mintlify Components:** `Callout`, `MDXImage`, `Tabs`

**Content:**

- **Customer Support** - Building intelligent help systems
- **Knowledge Management** - Corporate knowledge bases
- **Content Recommendation** - Personalized content delivery
- **Research Assistant** - Academic and research applications

**Interactive Elements:**

- Use case analyzer
- Architecture designer
- ROI calculator

#### 12.2 Best Practices (35 minutes)

**Mintlify Components:** `Note`, `Callout`, `CodeGroup`

**Content:**

- **Data Quality** - Ensuring high-quality training data
- **Security Considerations** - Protecting sensitive information
- **Scalability Patterns** - Designing for growth
- **Cost Optimization** - Managing API and infrastructure costs

**Interactive Elements:**

- Best practices checklist
- Security assessment tool
- Cost optimization calculator

#### 12.3 Project Completion (15 minutes)

**Mintlify Components:** `Callout`, `Note`, `Tabs`

**Content:**

- **Project Review** - Reviewing what we've built
- **Next Steps** - Suggestions for further development
- **Resources** - Additional learning materials and tools
- **Community** - Connecting with other developers

**Practical Exercise:**

- Review and document your completed project
- Plan next steps for enhancement
- Share your project with the community

**Reflection Questions:**

- What aspects of your RAG agent would you improve?
- How would you extend the functionality for your specific use case?
- What additional features would be most valuable?

---

## Assessment and Certification

### Final Project

Build a complete RAG application for a specific domain using the skills learned throughout the course.

### Assessment Criteria

- **Technical Implementation** (40%): Code quality, architecture, and functionality
- **User Experience** (25%): Interface design and usability
- **Performance** (20%): Optimization and scalability considerations
- **Documentation** (15%): Code documentation and user guides

### Certification Badge

"RAG Agent Developer" - Demonstrates proficiency in building production-ready RAG applications.

---

## Learning Path Features

### Interactive Elements

- **Live Code Sandboxes** - Embedded CodeSandbox environments for hands-on practice
- **Interactive Diagrams** - Visual representations of RAG concepts
- **Self-Assessment Quizzes** - Knowledge checks throughout the course
- **Progress Tracking** - Gamified learning with badges and achievements

### Support Resources

- **Slack Community** - Peer support and discussion
- **Email Support** - Direct instructor support
- **Troubleshooting Guides** - Common issues and solutions
- **FAQ Section** - Frequently asked questions and answers

### Continuous Learning

- **Advanced Modules** - Specialized topics and advanced techniques
- **Case Studies** - Real-world implementations and lessons learned
- **Tool Updates** - Keeping pace with technology evolution
- **Community Projects** - Collaborative open-source contributions

---

## Mintlify Component Recommendations

### Content Organization

- **Tabs** - For organizing related concepts and code examples
- **Steps** - For sequential instructions and setup procedures
- **Callout** - For important notes, warnings, and tips
- **Note** - For additional context and explanations

### Code Presentation

- **CodeGroup** - For showing multiple code examples or file structures
- **Snippet** - For terminal commands and quick code examples
- **MDXImage** - For diagrams, screenshots, and visual explanations

### Interactive Elements

- **Embedded Sandboxes** - For live coding environments
- **Interactive Diagrams** - For concept visualization
- **Self-Assessment Tools** - For knowledge validation

### Navigation and Structure

- **Table of Contents** - For easy navigation through modules
- **Progress Indicators** - For tracking learning progress
- **Related Links** - For connecting related concepts and resources

This learning path provides a comprehensive, hands-on approach to building RAG agents while following instructional design best practices for developer education, specifically designed for asynchronous delivery and foundational knowledge building.

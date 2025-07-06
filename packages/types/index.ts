// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  ADMIN = 'admin',
  DEVELOPER = 'developer',
  VIEWER = 'viewer',
}

export interface Permission {
  resource: string;
  actions: string[];
}

// Application Types
export interface Application {
  id: string;
  name: string;
  description?: string;
  status: ApplicationStatus;
  environment: Environment;
  repository: Repository;
  deployments: Deployment[];
  resources: Resource[];
  createdAt: string;
  updatedAt: string;
  ownerId: string;
}

export enum ApplicationStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DEPLOYING = 'deploying',
  ERROR = 'error',
}

export enum Environment {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

// Deployment Types
export interface Deployment {
  id: string;
  applicationId: string;
  version: string;
  status: DeploymentStatus;
  strategy: DeploymentStrategy;
  environment: Environment;
  startedAt: string;
  completedAt?: string;
  logs: DeploymentLog[];
  metrics: DeploymentMetrics;
}

export enum DeploymentStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

export enum DeploymentStrategy {
  BLUE_GREEN = 'blue_green',
  ROLLING = 'rolling',
  CANARY = 'canary',
}

export interface DeploymentLog {
  timestamp: string;
  level: LogLevel;
  message: string;
  source: string;
}

export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

// Resource Types
export interface Resource {
  id: string;
  type: ResourceType;
  name: string;
  configuration: Record<string, any>;
  status: ResourceStatus;
  metrics: ResourceMetrics;
  cost: ResourceCost;
}

export enum ResourceType {
  COMPUTE = 'compute',
  DATABASE = 'database',
  STORAGE = 'storage',
  NETWORK = 'network',
  CACHE = 'cache',
}

export enum ResourceStatus {
  HEALTHY = 'healthy',
  WARNING = 'warning',
  CRITICAL = 'critical',
  UNKNOWN = 'unknown',
}

// Metrics Types
export interface DeploymentMetrics {
  duration: number;
  successRate: number;
  errorRate: number;
  throughput: number;
}

export interface ResourceMetrics {
  cpu: MetricValue;
  memory: MetricValue;
  disk: MetricValue;
  network: NetworkMetrics;
}

export interface MetricValue {
  current: number;
  average: number;
  peak: number;
  unit: string;
}

export interface NetworkMetrics {
  inbound: MetricValue;
  outbound: MetricValue;
}

// Cost Types
export interface ResourceCost {
  current: number;
  projected: number;
  currency: string;
  period: string;
}

// AI/ML Types
export interface AIInsight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  severity: InsightSeverity;
  recommendations: string[];
  confidence: number;
  createdAt: string;
}

export enum InsightType {
  PERFORMANCE = 'performance',
  COST = 'cost',
  SECURITY = 'security',
  SCALING = 'scaling',
}

export enum InsightSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

// Plugin Types
export interface Plugin {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  status: PluginStatus;
  configuration: Record<string, any>;
  permissions: string[];
}

export enum PluginStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ERROR = 'error',
}

// Repository Types
export interface Repository {
  url: string;
  branch: string;
  provider: RepositoryProvider;
  credentials?: RepositoryCredentials;
}

export enum RepositoryProvider {
  GITHUB = 'github',
  GITLAB = 'gitlab',
  BITBUCKET = 'bitbucket',
}

export interface RepositoryCredentials {
  type: 'token' | 'ssh';
  value: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Error Types
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

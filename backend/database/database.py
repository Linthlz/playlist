import os
from mysql.connector.pooling import MySQLConnectionPool
from dotenv import load_dotenv

load_dotenv()  # Important if this file is called directly

DB_HOST = os.environ.get('DB_HOST')
DB_NAME = os.environ.get('DB_NAME')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')
DB_POOL_NAME = os.environ.get('DB_POOL_NAME', 'mypool')
POOL_SIZE = int(os.environ.get('POOL_SIZE', 5))

db_pool = MySQLConnectionPool(
    pool_name=DB_POOL_NAME,
    pool_size=POOL_SIZE,
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME
)

def get_connection():
    connection = db_pool.get_connection()
    connection.autocommit = True
    return connection

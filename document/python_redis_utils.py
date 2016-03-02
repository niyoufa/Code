#-*- coding: utf-8 -*-
from redis import ConnectionPool, Redis
import pdb

REDIS_MAX_CONNECTION = 50
REDIS_HOST = "127.0.0.1"
REDIS_PORT = 6379
REDIS_DB = 0

def singleton(cls, *args, **kw):
    instances = {}
    def _singleton():
        if cls not in instances:
            instances[cls] = cls(*args, **kw)
        return instances[cls]
    return _singleton
#单例
@singleton
class RedisListTool(object):
    def __init__(self):
        # self.__connection_pool = ConnectionPool(max_connections=REDIS_MAX_CONNECTION, host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB)
        self.__connection_pool = ConnectionPool(max_connections=REDIS_MAX_CONNECTION, host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB,password="nyf")
        self.__redis = self.get_redis()

    # 保存一条记录，默认添加到最前面
    def save_key_value(self, key, value, append=False):
        if append:
            self.__redis.rpush(key, value)
        else:
            self.__redis.lpush(key, value)

    # 保存多条记录，默认添加到最前面
    def save_key_values(self, key, value_list, append=False):
        if not isinstance(value_list, list) and not isinstance(value_list, tuple):
            return
        if len(value_list) <= 0:
            return
        if append:
            self.__redis.rpush(key, *value_list)
        else:
            self.__redis.lpush(key, *value_list)

    # 获取一条记录
    def get_key_value(self, key, index):
        value = self.__redis.lindex(key, index)
        return value

    # 获取多条记录
    def get_key_values(self, key, start=0, end=-1):
        values = self.__redis.lrange(key, start, end)
        return values

    # 获取键对应记录集的长度
    def get_key_values_length(self, key):
        length = self.__redis.llen(key)
        return length

    # 删除一条记录
    def delete_key_value(self, key, value):
        self.__redis.lrem(key, value)

    # 删除多条记录
    def delete_key_values(self, key, value_list):
        for value in value_list:
            self.__redis.lrem(key, value)

    # 删除一个key
    def delet_key(self, key):
        self.__redis.delete(key)

    # key是否存在
    def has_key(self, key):
        return self.__redis.exists(key)

    # 创建一个key,并添加值(如果key存在，则先删除再创建)
    def create_key_values(self, key, value_list, append=False):
        if self.has_key(key):
            self.delet_key(key)
        self.save_key_values(key, value_list, append)

    # 获得一个redis实例
    def get_redis(self):
        return Redis(connection_pool=self.__connection_pool)



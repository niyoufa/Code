#coding=utf8
#author = yxp
"""
    配置elasticsearchp2.2
    jdk1.8
    本配置文件以 路径，loging为主
"""


# ES_PATH = "http://192.168.1.113:9200"
ES_PATH = "http://127.0.0.1:9200"


#ES 定义index字段  
"""
    analyzed 使用分词器
    analyzer  分词器类型
"""
ES_FIELD_MAPPING = {
    "id" :
        {"index":"no","type":u'integer'},
    "sha1" :
        {"index":"analyzed","type":u'string','store': 'yes'},
    #标题
    "title":
        {"index":"analyzed","type":u'string','store': 'yes',},
    #作者
    "author" :
        {"index":"analyzed","type":u'string','store': 'yes',},
    #创建时间
    "creation_time" :
        {"index":"analyzed","type":u'date'},
    #是否允许主动传播
    "broadcast":
        {"index":"no","type":u'boolean'},
    #参与人数
    "nb_participants" :
        {"index":"analyzed","type":u'integer'},
    #插件类型: 调查问卷，监督举报等
    "plugin" :
        {"index":"analyzed","type":u'string'},
    #功能类别标签：排行榜，求安慰等
    "func_tags":
        {"index":"analyzed","type":u'string',},
    #行业大标签 list 
    "topic_tags" :
        {"index":"analyzed","type":'string','store': 'yes'},
    #兴趣小标签 list
    "interest_tag":
        {"index":"analyzed","type":'string','store': 'yes'},
    #描述
    "description" :
        {"index":"no","type":u'string'},
    #版本
    "_version_":
        {"index":"analyzed","type":u'long'},
    #地理位置,经纬度 [经度,纬度]
    "geo":
        {"index":"analyzed","type":u'geo_point','store': 'yes',},
    #发布活动时的参与者限制条件列表
    "limits" :
        {"index":"analyzed","type":u'string'},
    #参与类型 0 :所有用户 1:联系人
    "participant_type" :
        {"index":"no","type":u'integer'},
    #图片列表
    "image_sha1s":
        {"index":"no","type":u'string'},
    #分享设置 1:可以分享 0:不可以分享
    "can_be_shared" :
        {"index":"no","type":u'integer'},
    #分享次数
    "nb_shares" :
        {"index":"analyzed","type":u'integer'},
    #多少人已经完成任务或已签到
    "nb_completes":
        {"index":"analyzed","type":u'integer'},
    #根据坐标反解析出的地理位置信息，比如海淀区学清路38号
    "loc" :
        {"index":"analyzed","type":u'string'},
    #城市
    "city" :
        {"index":"analyzed","type":u'string'},
    #百度地图对应的城市编码
    "city_code":
        {"index":"analyzed","type":u'integer'},
    #发起人类型：0表示以个人名义发起，1表示以公司名义发起
    "organizer_type" :
        {"index":"analyzed","type":u'integer'},
     #是否有红包, 缺省免费没有
    "has_bonus" :
        {"index":"no","type":u'boolean'},
    #此项投票或是任务的红包总金额
    "total_amount":
        {"index":"analyzed","type":u'float'},
    #红包派发给多少人
    "nb_rewarded_people":
        {"index":"analyzed","type":u'integer'},
    #红包派发类型: 0:最先参与的若干个人；1:根据结果审批的若干个人；
    "bonus_type" :
        {"index":"analyzed","type":u'integer'},
    #红包是否已经派发0 :未派发 1:已派发
    "is_bonus_paid":
        {"index":"analyzed","type":u'integer',},
    #红包发放是否已经结算：0 :未结算 1:已结算
    "is_account" :
        {"index":"analyzed","type":u'integer',},
    "creator_sha1" :
        {"index":"analyzed","type":u'string',},
    "sub_type" :
        {"index":"analyzed","type":u'integer',},
    "status" :
        {"index":"analyzed","type":u'integer',},
}

#conn.put_mapping("man", {'properties':mapping}, ["human"]) 相当于create table操作

import datetime
creation_time = datetime.datetime(1992,8,6)
example_data = {
    "id" :892222,
    "sha1" :'afafwqfwqfwqasdfsdadfdfdffdaesadfrqwer',
    "title":'panpan',
    "author" :"yxp",
    "creation_time" :creation_time,
    "broadcast":True,
    "nb_participants" :123,
    "plugin" :"sdaf",
    "func_tags":'asdf',
    "topic_tags" :['加拿大','朝鲜'],
    "interest_tag":['美国','中国','英国','日本','俄国','新西兰','爱尔兰'],
    "description":"asdfsda",
    "_version_":1323,
    #地理位置,经纬度 [经度,纬度]
    "geo":[11,12],
    #发布活动时的参与者限制条件列表
    "limits" :'121313',
    #参与类型 0 :所有用户 1:联系人
    "participant_type" :2,
    #图片列表
    "image_sha1s":'13321',
    #分享设置 1:可以分享 0:不可以分享
    "can_be_shared" :1,
    #分享次数
    "nb_shares" :544,
    #多少人已经完成任务或已签到
    "nb_completes":46546,
    #根据坐标反解析出的地理位置信息，比如海淀区学清路38号
    "loc" :'asdfsad',
    #城市
    "city" :'南京',
    #百度地图对应的城市编码
    "city_code":23,
    #发起人类型：0表示以个人名义发起，1表示以公司名义发起
    "organizer_type" :2,
     #是否有红包, 缺省免费没有
    "has_bonus" :False,
    #此项投票或是任务的红包总金额
    "total_amount":1213.213,
    #红包派发给多少人
    "nb_rewarded_people":56,
    #红包派发类型: 0:最先参与的若干个人；1:根据结果审批的若干个人；
    "bonus_type" :2,
    #红包是否已经派发0 :未派发 1:已派发
    "is_bonus_paid":200,
    #红包发放是否已经结算：0 :未结算 1:已结算
    "is_account" :100,
    #对象类型: 
    "sub_type":0,
    #用户user_sha1
    "creator_sha1":"123232"

}




# coding=utf-8
import  datetime, time, json, pdb
import pyes
from pyes import *
from pyes.queryset import generate_model
from  es_settings  import *
import cPickle as pickle
import logging
from xieli.models import * 
    
# 连接es服务器
CONN_ES = pyes.ES(ES_PATH, timeout=200.0)

#连接es服务器
def _connect_index():
    conn = pyes.ES(ES_PATH, timeout=200.0)
    return conn

#创建index索引表
def create_index(name):
    CONN_ES.indices.create_index(name)
    CONN_ES.indices.put_mapping("CommonObject", {'properties':ES_FIELD_MAPPING}, [name])

#删除index
def delete_index(name):
    CONN_ES.indices.delete_index(name)

#向es插入数据
def insert_into_es(params,index_name,index_type):
    #参数矫正
    CONN_ES.index(params,index_name,index_type)

#获取es数据，形成类似django model对象
def get_index_model(database,table):
    from pyes.queryset import generate_model
    return generate_model(database, table,es_url=ES_PATH)

#获取所有相关的记录
def march_query_alltag(field,query):
    #b = MatchQuery('interest_tag','美国')
    b = MatchQuery(field,query)
    return [i for i in CONN_ES.search(query =b)]

#must + should
def march_query_tag(field,query,sub_type):
    must = pyes.TermQuery("sub_type",sub_type)
    should = pyes.MatchQuery(field,query)
    query = pyes.BoolQuery(must = must ,should = should)
    return [i for i in CONN_ES.search(query =query)]

#获取协力对象列表
def get_object_list(user_sha1,sub_type,tag_name,query_time): 
    """ 
        备注 : 协力对象查询
        请求参数 : 
        user_sha1 用户sha1 
        sub_type 对象类型 
        tag_name : 标签名称 可以为空
        query_time : 查询时间
        返回参数 : 
        obj_list : ((user_sha1,obj_sha1),)          
        例如 : ( (u'acdd6c3b14284cae21cd38feabf53b8151111f6a', u'2084610fe24c26d131bad8a91563583435c55c13'), ) 
        说明 : 
        user_sha1 : 用户sha1
        obj_sha1 : 协力对象sha1
    """

    #step1: 从user表，taggroup表获取 tag
    # commobj = xieli_recommend(user_sha1,1,sub_type)
    if int(sub_type) == 0:
        commobj = get_index_model("teamup","CommonObject").objects.exclude(creator_sha1 = user_sha1).all()
    else:
        commobj = get_index_model("teamup","CommonObject").objects.filter(sub_type = sub_type).exclude(creator_sha1 = user_sha1)
    results_list = []
    for obj in commobj:
        results_list.append(obj.sha1)

    return results_list

#查询(移动端进行的全局查询)
def search_query(query):
    title_object = MatchQuery("title",query)
    description_object = MatchQuery("description",query)
    title_object_list =  [i for i in CONN_ES.search(query =title_object)]
    description_object_list =  [i for i in CONN_ES.search(query =description_object)]
    for title in title_object_list:
        if title not in description_object_list:
            description_object_list.append(title)

    results_list = []
    for obj in description_object_list:
        results_list.append((obj.creator_sha1,obj.sha1))
        print obj.title
        print obj.sha1
    return tuple(results_list)


 # 限定时间内的es数据
def  _index_time(date_range, query):
    if type(date_range) == type(-1) and date_range != -1:
        start_date = last_time()
        print start_date
        #start_da = datetime.datetime.strptime(start_date, "%Y-%m-%dT%H:%M:%SZ").date()
        start_da = datetime.datetime.strptime(start_date, "%Y-%m-%d").date()
        end_date = (start_da + datetime.timedelta(days=date_range)).strftime('%Y-%m-%d')
        print end_date
        # query.add_must(pyes.RangeQuery(pyes.ESRange('pubtime',from_value=start_date, to_value=end_date)))
        query.add_must(pyes.RangeQuery(pyes.ESRange('datestring', from_value=start_date, to_value=end_date)))
        return query, end_date
    else:
        print '请输入int类型时间间隔'

# 利用pickle保存上一次获取新闻时间
def last_time():
    input = open('news_time.txt', 'rb')
    try:
        #读取上一次时间
        last_time = pickle.load(input)
    except Exception, e:
        #读取失败，就从settings中的start 时间开始
        print e
        last_time = start_day
    input.close()
    return last_time
    
# 配置文件
def get_log():
    logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s',
                    datefmt='%a, %d %b %Y %H:%M:%S',
                    filename='recommend_xieli_yxp.log',
                    filemode='a')  
    return logging


def tag_recommend_core(user_sha1,tag_industry,tag_intrest,tag_dict,sub_type,**args):
    """
        从es上获取 标签列表对应的 协力对象
        标签推荐核心
    """
    import pdb
    import math

    if sub_type != 0 :
        topic_objectlist = march_query_tag("topic_tags",tag_industry,sub_type)
        interest_objectlist = march_query_tag("interest_tag",tag_intrest,sub_type)
    else:
        topic_objectlist = march_query_alltag("topic_tags",tag_industry)
        interest_objectlist = march_query_alltag("interest_tag",tag_intrest)

    #去重
    for interest_object in interest_objectlist:
        if interest_object not in topic_objectlist :
            topic_objectlist.append(interest_object)

    #内部排序 内函数
    def sort_score(object_core):
        taglist5 = object_core.topic_tags
        taglist6 = object_core.interest_tag
        p,q = 0.5,0.5
        tag_rank = rank_fanction(tag_dict[0],tag_dict[1],tag_dict[2],tag_dict[3],taglist5,taglist6,p,q)
        bonusrank,credirank,focusrank,spreadrank,publishdays = 1,1,1,1,1
        other = 0.5* bonusrank + 0.2*credirank + 0.2*focusrank + 0.3*spreadrank
        score = tag_rank * other * math.pow(math.e,-publishdays)
        return score
    return sorted(topic_objectlist,key = lambda obj : sort_score(obj))


def geo_recommend_core(lat,log,user_sha1,sub_type):
    """
        从es上获取5个坐标点的 协力对象 [测试可行]
        非 用户自己发的
    """
    commentobject = get_index_model('teamup','CommonObject')
    if sub_type !=0 :
        comm_self = commentobject.objects.filter(geo=[lat,log] , sub_type = sub_type).exclude(creator_sha1=user_sha1)
        comm_1=commentobject.objects.filter(geo=[lat-0.1,log] , sub_type = sub_type).exclude(creator_sha1=user_sha1)
        comm_2=commentobject.objects.filter(geo=[lat,log-0.1] , sub_type = sub_type).exclude(creator_sha1=user_sha1)
        comm_3=commentobject.objects.filter(geo=[lat+0.1,log] , sub_type = sub_type).exclude(creator_sha1=user_sha1)
        comm_4=commentobject.objects.filter(geo=[lat,log+0.1] , sub_type = sub_type).exclude(creator_sha1=user_sha1)
    else:
        comm_self = commentobject.objects.filter(geo=[lat,log]).exclude(creator_sha1=user_sha1)
        comm_1=commentobject.objects.filter(geo=[lat-0.1,log]).exclude(creator_sha1=user_sha1)
        comm_2=commentobject.objects.filter(geo=[lat,log-0.1]).exclude(creator_sha1=user_sha1)
        comm_3=commentobject.objects.filter(geo=[lat+0.1,log]).exclude(creator_sha1=user_sha1)
        comm_4=commentobject.objects.filter(geo=[lat,log+0.1]).exclude(creator_sha1=user_sha1)
    comm_relation_new = []
    map(lambda x :comm_relation_new.append(x) , comm_self)
    comm_relation_new.extend(comm_1)
    comm_relation_new.extend(comm_2)
    comm_relation_new.extend(comm_3)
    comm_relation_new.extend(comm_4)
    #comm_self.order_by(creation_time)
    return comm_relation_new[0:50]


def relation_recommend_core(user_relation,sub_type):
    """
        从用户好友中查询 协力对象[测试可行]
    """
    commentobject = get_index_model('teamup','CommonObject')
    if sub_type != 0 :
        comm_relation = commentobject.objects.filter(creator_sha1__in=user_relation,sub_type=sub_type)
    else:
        comm_relation = commentobject.objects.filter(creator_sha1__in=user_relation)
    # #comm_relation.order_by(creation_time)
    # comm_relation = march_query_tag("creator_sha1",user_relation)
    return comm_relation[0:50]

def rank_fanction(taglist1,taglist2,taglist3,taglist4,taglist5,taglist6,p,q):
    """
        标签推荐rank计算公式
    """
    tag_rank = 0
    tag_rank1=0
    tag_rank2= 0
    tag_rank3=0
    tag_rank4= 0

    for tag in taglist5:
        for tag1 in taglist1:
            if  tag == tag1[0]:
                tag_rank1= tag_rank1+ tag1[1]

        for tag3 in taglist3:
            if  tag == tag3[0]:
                tag_rank3 = tag_rank3 + tag3[1]
    
    tag_rank = p*q*tag_rank1 + (1-p)*q*tag_rank3


    for tag6  in  taglist6:
        for tag2  in taglist2:
            if  tag6 == tag2[0]:
                tag_rank2= tag_rank2+ tag2[1]

        for  tag4  in taglist4:
            if tag6 == tag4[0] :
                tag_rank4 = tag_rank4 + tag4[1]
    
    tag_rank = tag_rank + (1-p)*(1-q)*(tag_rank4+tag_rank2)

    return tag_rank


def infor_log(func):
    def do_job(uesr_sha1,type):
        logging = get_log()
        logging.info('beging recommend')
        try:
            func(uesr_sha1,type)
        except Exception, e:
            logging.error(e.__str__())
        logging.info('end recommend')

    return do_job
#user_sha1 = "acdd6c3b14284cae21cd38feabf53b8151111f6a"

#协力推荐主函数
def xieli_recommend(user_sha1,type,sub_type):
    #step1  判断是推荐的哪种情况
    taglist1 = None
    taglist2 = None

    if type ==1:
        #匿名用户第一次使用协力 获取做大群组标签
        max_group = GroupTags.objects.raw(
            "select * from xieli_grouptags order by headcount limit 1"
            )[0]

    elif type ==2 :
        #注册用户第一次使用协力  用户信息标签
        get_user_personalinfo_tag = PersonalInfo.objects.get(user_sha1 =user_sha1)
        age = get_user_personalinfo_tag.age
        gender = get_user_personalinfo_tag.gender
        profession = get_user_personalinfo_tag.profession
        education = get_user_personalinfo_tag.education
        annual_income = get_user_personalinfo_tag.annual_income
        #参数处理
        education = education if education  else 0
        profession = profession if profession else  0
        annual_income = annual_income if annual_income else 0

        if len(str(age)) <2:
            new_age = 1
        elif  len(str(age)) == 2:
            if age>=66:
                new_age = 7
            else:
                new_age = int(str(age)[0])
        else:
            new_age = 0

        max_group = GroupTags.objects.filter(age = new_age,
            gender = gender,
            career = profession,
            education = education,
            income = annual_income).first()

    else:
        personalinfo = PersonalInfo.objects.filter(user_sha1 = user_sha1).first()
        taglist1 = PersonalInfo.industry_tags
        taglist2 = PersonalInfo.interest_tags


    taglist3 = json.loads(max_group.industry_tags)  #元组形式的的行业大标签
    taglist4 = json.loads(max_group.interest_tags)

    #检索使用
    tag3 = zip(*taglist3)[0] if taglist3 else []
    tag4 = zip(*taglist4)[0] if taglist4 else []

    tag1 = zip(*taglist1)[0] if taglist1 else []
    tag2 = zip(*taglist2)[0] if taglist2 else []

    tag_dict = (taglist1,taglist2,taglist3,taglist4)
    tag1.extend(tag3)
    tag2.extend(tag4)
    tag1 = set(tag1)
    tag2 = set(tag2)
    #模拟数据
    tag1 = ["金融","文化","餐饮","旅游","艺术","医疗"]
    tag2 = ["教育","宠物","情感","饮食"]
    taglist1 = [("金融",0.2),("文化",0.5)]
    taglist2 = [("教育",0.1),("宠物",0.3)]
    taglist3 = [("餐饮",0.4),("旅游",0.5),("艺术",0.4),("医疗",0.5)]
    taglist4 = [("情感",0.6),("饮食",0.5)]
    tag_dict = (taglist1,taglist2,taglist3,taglist4)

    #标签推荐函数
    top_tag = tag_recommend_core(user_sha1,tag1,tag2,tag_dict,sub_type)

    #地理推荐函数
    user_location = UserLoc.objects.filter(user_sha1=user_sha1).order_by("-creation_time").first()
    lon = user_location.x_axis
    lat = user_location.y_axis
    top_geo = geo_recommend_core(lat,lon,user_sha1,sub_type)

    #好友推荐函数
    #TODO待测试
    user_relation = ContactRelation.objects.filter(user_sha1 = user_sha1).values('contact_sha1')
    relation = map(lambda x : x['contact_sha1'],user_relation)
    top_relation_obj = relation_recommend_core(relation,sub_type)

    return top_tag


def ceshi():
    a = [('bb',12),('cc',13),('dd',35)]
    def gj(obj):
        return obj[1]
    sorted(a,key = lambda b :gj(b))
    return a 
